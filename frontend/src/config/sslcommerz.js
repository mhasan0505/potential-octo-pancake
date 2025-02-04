const SSLCommerzPayment = require('sslcommerz-lts');

// Replace these with your actual SSLCOMMERZ credentials
const store_id = process.env.REACT_APP_SSLCOMMERZ_STORE_ID;
const store_passwd = process.env.REACT_APP_SSLCOMMERZ_STORE_PASSWORD;
const is_live = process.env.NODE_ENV === 'production'; //true for live, false for sandbox

const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);

module.exports = sslcz;