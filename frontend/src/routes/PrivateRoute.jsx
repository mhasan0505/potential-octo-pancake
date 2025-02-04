import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const PrivateRoute = ({ children, adminOnly = false }) => {
    const { user, loading, isAdmin } = useAuth();

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!user) {
        toast.error('Please login to access this page');
        return <Navigate to="/login" replace />;
    }

    if (adminOnly && !isAdmin) {
        toast.error('You do not have permission to access this page');
        return <Navigate to="/" replace />;
    }

    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
    adminOnly: PropTypes.bool
};

export default PrivateRoute;