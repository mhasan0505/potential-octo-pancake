/* eslint-disable no-unused-vars */
import  { useEffect, useState } from 'react';
import { Table, Button, Space, message, Modal } from 'antd';
import axios from 'axios';
import moment from 'moment';

const OrdersList = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('/api/v1/admin/orders');
            setOrders(data.orders);
        } catch (error) {
            message.error('Failed to fetch orders');
        }
        setLoading(false);
    };

    const handleStatusUpdate = async (orderId, status) => {
        try {
            await axios.put(`/api/v1/admin/order/${orderId}`, { status });
            message.success('Order status updated successfully');
            fetchOrders();
        } catch (error) {
            message.error('Failed to update order status');
        }
    };

    const handleDelete = async (orderId) => {
        try {
            await axios.delete(`/api/v1/admin/order/${orderId}`);
            message.success('Order deleted successfully');
            fetchOrders();
        } catch (error) {
            message.error('Failed to delete order');
        }
    };

    const columns = [
        {
            title: 'Order ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Customer',
            dataIndex: ['user', 'name'],
            key: 'customer',
        },
        {
            title: 'Amount',
            dataIndex: 'totalPrice',
            key: 'amount',
            render: (amount) => `$${amount.toFixed(2)}`,
        },
        {
            title: 'Status',
            dataIndex: 'orderStatus',
            key: 'status',
            render: (status) => (
                <span className={`status ${status.toLowerCase()}`}>
                    {status}
                </span>
            ),
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'date',
            render: (date) => moment(date).format('MMMM Do YYYY'),
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <Space>
                    <Button onClick={() => {
                        setSelectedOrder(record);
                        setIsModalVisible(true);
                    }}>
                        View Details
                    </Button>
                    <Button 
                        type="primary"
                        onClick={() => handleStatusUpdate(record._id, 
                            record.orderStatus === 'Processing' ? 'Shipped' : 'Delivered'
                        )}
                    >
                        Update Status
                    </Button>
                    <Button 
                        type="danger"
                        onClick={() => handleDelete(record._id)}
                    >
                        Delete
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div className="orders-list">
            <h2>Orders Management</h2>
            <Table 
                columns={columns} 
                dataSource={orders}
                loading={loading}
                rowKey="_id"
            />
            
            <Modal
                title="Order Details"
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                footer={null}
                width={800}
            >
                {selectedOrder && (
                    <div>
                        <h3>Shipping Information</h3>
                        <p>Address: {selectedOrder.shippingInfo.address}</p>
                        <p>City: {selectedOrder.shippingInfo.city}</p>
                        <p>Phone: {selectedOrder.shippingInfo.phoneNo}</p>
                        
                        <h3>Order Items</h3>
                        {selectedOrder.orderItems.map((item, index) => (
                            <div key={index} className="order-item">
                                <img src={item.image} alt={item.name} width="50" />
                                <span>{item.name}</span>
                                <span>{item.quantity} x ${item.price} = ${item.quantity * item.price}</span>
                            </div>
                        ))}
                        
                        <h3>Payment Information</h3>
                        <p>Status: {selectedOrder.paymentInfo.status}</p>
                        <p>Total Amount: ${selectedOrder.totalPrice}</p>
                    </div>
                )}
            </Modal>
        </div>
    );
};

export default OrdersList;