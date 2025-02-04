import api from './config';

// Auth services
export const authService = {
    login: (credentials) => api.post('/auth/login', credentials),
    register: (userData) => api.post('/auth/register', userData),
    logout: () => api.post('/auth/logout')
};

// Product services
export const productService = {
    getAllProducts: () => api.get('/products'),
    getProduct: (id) => api.get(`/products/${id}`),
    searchProducts: (query) => api.get(`/products/search?q=${query}`)
};

// Cart services
export const cartService = {
    addToCart: (productId, quantity) => api.post('/cart', { productId, quantity }),
    getCart: () => api.get('/cart'),
    updateCartItem: (itemId, quantity) => api.put(`/cart/${itemId}`, { quantity }),
    removeFromCart: (itemId) => api.delete(`/cart/${itemId}`)
};

// Order services
export const orderService = {
    createOrder: (orderData) => api.post('/orders', orderData),
    getOrders: () => api.get('/orders'),
    getOrder: (orderId) => api.get(`/orders/${orderId}`)
};
