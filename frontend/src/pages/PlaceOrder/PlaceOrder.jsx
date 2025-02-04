import PropTypes from "prop-types";
import React from "react";

const inputs = [
  {
    level: "Full Name",
    type: "text",
    placeholder: "Jon Doe",
    for: "name",
    required: true,
  },
  {
    level: "Email",
    type: "email",
    placeholder: "example@gmail.com",
    for: "email",
    required: true,
  },
  {
    level: "Country",
    type: "text",
    placeholder: "Bangladesh",
    for: "country",
    required: false,
  },
  {
    level: "Sreet Address",
    type: "text",
    placeholder: "11 Zia Uddin Road",
    for: "address",
    required: false,
  },
  {
    level: "Post Code",
    type: "number",
    placeholder: "****",
    for: "post",
    required: true,
  },
  {
    level: "Phone",
    type: "number",
    placeholder: "+88016***78",
    for: "phone",
    required: true,
  },
];

const products = [
  { id: 1, name: "How to Improve Your Personal Skills (PDF)", price: 15.0 },
  // { id: 2, name: "Product 2", price: 20 },
  // { id: 3, name: "Product 3", price: 30 },
];

const progressBardetails = [
  { value: "1", active: true },
  { value: "2", active: true },
  { value: "3", active: false },
];

const ProgressBar = () => {
  return (
    <div className="col-span-12">
      <div className="flex items-center justify-between relative mb-12">
        <div className="absolute top-5 right-0 left-0 border-t-2 border-dashed "></div>
        {progressBardetails.map((item, i) => (
          <span
            className={`relative w-10 h-10 shadow flex justify-center items-center text-lg z-20 cursor-pointer rounded-full border ${
              item.active
                ? "bg-blue-600 text-white  border-blue-600"
                : "bg-gray-100"
            } `}
            key={i}
          >
            {item.value}
          </span>
        ))}
      </div>
    </div>
  );
};

const InputItem = ({ input }) => {
  return (
    <div className="flex flex-col gap-2 mt-6">
      <label htmlFor={input.for} className="font-medium text-t_color">
        {input.level}{" "}
        <span className="text-blue-600">{input.required ? "*" : ""}</span>
      </label>
      <input
        type={input.type}
        className="h-14 p-4 bg-blue-600 bg-opacity-5 focus:outline-none focus:border focus:border-blue-600 rounded-md"
        id={input.for}
        placeholder={input.placeholder}
        required
      />
    </div>
  );
};

InputItem.propTypes = {
  input: PropTypes.object.isRequired,
};

const OrderForm = () => {
  return (
    <form action="">
      <h4 className="font-medium text-xl text-t_color">Your Billing Details</h4>
      {inputs.map((input, i) => (
        <InputItem input={input} key={i} />
      ))}
    </form>
  );
};

const Shape = () => {
  return (
    <svg
      width="50"
      height="34"
      viewBox="0 0 50 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="paypal-color-large">
        <rect
          id="card_bg"
          x="1"
          y="1"
          width="48"
          height="32"
          rx="4"
          fill="white"
          stroke="#BCBDBD"
        />
        <g id="paypal">
          <path
            id="Path"
            d="M21.3385 26.3202L21.6885 24.1202H20.9085H17.2285L19.7885 7.86018C19.7953 7.8098 19.8202 7.76361 19.8585 7.73018C19.8987 7.69911 19.9477 7.6816 19.9985 7.68018H26.2085C28.2785 7.68018 29.6985 8.11018 30.4485 8.96018C30.7804 9.3167 31.0116 9.75498 31.1185 10.2302C31.2351 10.8077 31.2351 11.4027 31.1185 11.9802V12.4802L31.4685 12.6802C31.735 12.813 31.9754 12.9925 32.1785 13.2102C32.4842 13.5792 32.6815 14.0257 32.7485 14.5002C32.8234 15.1204 32.7964 15.7487 32.6685 16.3602C32.5366 17.103 32.2761 17.817 31.8985 18.4702C31.5934 18.9938 31.1811 19.4471 30.6885 19.8002C30.1928 20.1382 29.6408 20.3854 29.0585 20.5302C28.4048 20.6951 27.7327 20.7757 27.0585 20.7702H26.5685C26.2251 20.7702 25.8925 20.8905 25.6285 21.1102C25.3631 21.3338 25.1888 21.6468 25.1385 21.9902V22.1902L24.5285 26.0702V26.2202C24.5358 26.2464 24.5358 26.274 24.5285 26.3002H24.4685L21.3385 26.3202Z"
            fill="#253D80"
          />
          <path
            id="Path_2"
            d="M31.8002 12.0801L31.7402 12.4501C30.9202 16.6501 28.1102 18.1101 24.5302 18.1101H22.7102C22.2724 18.1095 21.8991 18.4276 21.8302 18.8601L20.9002 24.7801L20.6302 26.4601C20.61 26.5946 20.649 26.7313 20.7372 26.8349C20.8254 26.9384 20.9542 26.9987 21.0902 27.0001H24.3302C24.7144 26.9997 25.0411 26.7197 25.1002 26.3401V26.1801L25.7102 22.3101V22.1001C25.7648 21.722 26.0883 21.4411 26.4702 21.4401H27.0002C30.1302 21.4401 32.5902 20.1701 33.3002 16.4401C33.6844 15.1652 33.4474 13.784 32.6602 12.7101C32.4105 12.4539 32.1198 12.241 31.8002 12.0801V12.0801Z"
            fill="#189BD7"
          />
          <path
            id="Path_3"
            d="M30.9384 11.7398L30.5584 11.6398L30.1384 11.5598C29.6089 11.4807 29.0738 11.4439 28.5384 11.4498H23.6584C23.5444 11.4467 23.4313 11.4707 23.3284 11.5198C23.0966 11.6284 22.9349 11.8464 22.8984 12.0998L21.8984 18.6698V18.8598C21.9673 18.4274 22.3405 18.1093 22.7784 18.1098H24.5984C28.1784 18.1098 30.9884 16.6498 31.8084 12.4498L31.8684 12.0798C31.653 11.9685 31.429 11.8749 31.1984 11.7998L30.9384 11.7398Z"
            fill="#242E65"
          />
          <path
            id="Path_4"
            d="M22.8994 12.1C22.9359 11.8466 23.0975 11.6286 23.3294 11.52C23.4323 11.4709 23.5454 11.4469 23.6594 11.45H28.5394C29.0748 11.444 29.6098 11.4808 30.1394 11.56L30.5594 11.64L30.9394 11.74L31.1294 11.8C31.3599 11.8751 31.584 11.9687 31.7994 12.08C32.1245 10.8306 31.8265 9.50118 30.9994 8.51C29.9994 7.45 28.3594 7 26.2194 7H19.9994C19.5615 6.99947 19.1883 7.31756 19.1194 7.75L16.5294 24.16C16.5062 24.3148 16.5513 24.472 16.653 24.5909C16.7547 24.7098 16.9029 24.7788 17.0594 24.78H20.8994L21.8994 18.67L22.8994 12.1Z"
            fill="#253D80"
          />
        </g>
      </g>
    </svg>
  );
};

const Payment = ({ products }) => {
  const calculateTotal = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.price;
    });
    return total.toFixed(2);
  };

  return (
    <div className="bg-white p-6 lg:p-12 rounded-md">
      <div className="">
        <h4 className="text-2xl font-medium mb-12 text-t_color">Your Order</h4>

        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <h6 className="font-medium text-t_color">Product</h6>
          </div>
          <div className="col-span-1">
            <h6 className="font-medium text-t_color">Price</h6>
          </div>
          <hr className="col-span-3 my-0" />

          {products.map((product, index) => (
            <React.Fragment key={index}>
              <div className="col-span-2">
                <h6 className="font-medium text-t_color">{product.name}</h6>
              </div>
              <div className="col-span-1">
                <h6 className="font-medium text-t_color">TK{product.price.toFixed(2)}</h6>
              </div>
            </React.Fragment>
          ))}

          <hr className="col-span-3 my-0" />
          <div className="col-span-2">
            <h6 className="font-medium text-t_color">Total</h6>
          </div>
          <div className="col-span-1">
            <h6 className="font-medium text-t_color">TK{calculateTotal()}</h6>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 lg:p-6 mt-12">
        <form>
          <h6 className="font-medium text-t_color">Paypal</h6>
          <div className="flex items-center my-4">
            <input className="h-4 w-4 mr-3" type="radio" />
            <Shape />
          </div>
          <h6 className="font-medium text-t_color">Debit or Credit Card</h6>
          <div className="flex items-center my-4">
            <input className="h-4 w-4 mr-3" type="radio" checked />
            <img
              src="https://cdn.easyfrontend.com/pictures/Debit%20or%20Credit.png"
              alt=""
              className="max-w-full h-auto"
            />
          </div>

          <div className="my-8">
            <input className="form-check-input" type="checkbox" value="" />
            <label className="font-medium text-t_color ">
              {" "}
              I have read and agree to the website terms and conditions *
            </label>
          </div>
          <button className="text-white bg-blue-600 hover:bg-opacity-90 p-4 px-9 flex justify-center items-center leading-none h-full rounded-md w-full">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

Payment.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const PlaceOrder = () => {
  return (
    <section className="py-14 md:py-24 bg-white text-zinc-900 dark:text-white relative overflow-hidden z-10">
      <div className="container px-4 mx-auto">
        <div className="row justify-content-center">
          <ProgressBar />

          <div className="col-span-12">
            <div className="bg-gray-100 grid grid-cols-12 gap-6 p-6 lg:p-12 mt-12">
              <div className="col-span-12 lg:col-span-5">
                <OrderForm />
              </div>
              <div className="col-span-12 lg:col-start-7 lg:col-span-6">
                <Payment products={products} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;
