import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  GoogleAuthProvider,
  FacebookAuthProvider 
} from "firebase/auth";
import { toast } from 'react-toastify';
import { auth } from '../../config/firebase';

const LoginPopUp = ({ setShowLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors] = useState({});

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowLogin(false);
      toast.success('Successfully logged in!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      setShowLogin(false);
      toast.success('Successfully logged in with Google!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const provider = new FacebookAuthProvider();
      await signInWithPopup(auth, provider);
      setShowLogin(false);
      toast.success('Successfully logged in with Facebook!');
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg w-full max-w-md relative">
        <button
          onClick={() => setShowLogin(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FontAwesomeIcon icon={faXmark} className="text-xl" />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full p-2 border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } rounded`}
              placeholder="Email"
            />
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full p-2 border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } rounded`}
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <div className="mt-4 space-y-3">
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 bg-red-600 text-white py-2 rounded hover:bg-red-700"
          >
            <FontAwesomeIcon icon={faGoogle} />
            Login with Google
          </button>

          <button
            onClick={handleFacebookLogin}
            className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white py-2 rounded hover:bg-blue-900"
          >
            <FontAwesomeIcon icon={faFacebook} />
            Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

LoginPopUp.propTypes = {
  setShowLogin: PropTypes.func.isRequired
};

export default LoginPopUp;