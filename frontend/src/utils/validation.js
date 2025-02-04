export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  // Bangladesh phone number format: +880 or 01 followed by 9 digits
  const re = /^(?:\+?880|0)1[3-9]\d{8}$/;
  return re.test(phone.replace(/[\s-]/g, ''));
};

export const validateCardNumber = (cardNumber) => {
  // Add basic Luhn algorithm check
  const digits = cardNumber.replace(/\s/g, '');
  if (!/^\d{15,19}$/.test(digits)) return false;
  
  let sum = 0;
  let isEven = false;
  
  for (let i = digits.length - 1; i >= 0; i--) {
    let digit = parseInt(digits[i]);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
};

export const validateExpiry = (expiry) => {
  const re = /^(0[1-9]|1[0-2])\/([0-9]{2})$/;
  if (!re.test(expiry)) return false;

  const [month, year] = expiry.split('/');
  const expDate = new Date(2000 + parseInt(year), parseInt(month));
  const today = new Date();
  
  // Set to first day of month for proper comparison
  today.setDate(1);
  today.setHours(0, 0, 0, 0);
  
  return expDate >= today;
};

export const validateCVC = (cvc) => {
  const re = /^\d{3,4}$/;
  return re.test(cvc);
};

export const validateZipCode = (zipCode) => {
  // Bangladesh postal code format: 4 digits
  const re = /^\d{4}$/;
  return re.test(zipCode.replace(/[\s-]/g, ''));
};

export const formatCardNumber = (value) => {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || '';
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(' ');
  }
  return value;
};

export const formatExpiry = (value) => {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  if (v.length >= 2) {
    return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
  }
  return v;
};
