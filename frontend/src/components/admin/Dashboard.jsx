import { useEffect, useState } from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { DollarOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import axios from 'axios';

const Dashboard = () => {
    const [stats, setStats] = useState({
        totalOrders: 0,
        totalAmount: 0,
        recentOrders: [],
        userCount: 0
    });

    useEffect(() => {
        fetchDashboardStats();
    }, []);

    const fetchDashboardStats = async () => {
        try {
            const [ordersResponse, usersResponse] = await Promise.all([
                axios.get('/api/v1/admin/orders'),
                axios.get('/api/v1/admin/users')
            ]);

            setStats({
                totalOrders: ordersResponse.data.orders.length,
                totalAmount: ordersResponse.data.totalAmount,
                recentOrders: ordersResponse.data.orders.slice(-5),
                userCount: usersResponse.data.users.length
            });
        } catch (error) {
            console.error('Failed to fetch dashboard stats:', error);
        }
    };

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            
            <Row gutter={16}>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="Total Orders"
                            value={stats.totalOrders}
                            prefix={<ShoppingCartOutlined />}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="Total Revenue"
                            value={stats.totalAmount}
                            prefix={<DollarOutlined />}
                            precision={2}
                        />
                    </Card>
                </Col>
                <Col span={8}>
                    <Card>
                        <Statistic
                            title="Total Users"
                            value={stats.userCount}
                            prefix={<UserOutlined />}
                        />
                    </Card>
                </Col>
            </Row>

            <Card title="Recent Orders" style={{ marginTop: 16 }}>
                {stats.recentOrders.map(order => (
                    <Card.Grid style={{ width: '100%' }} key={order._id}>
                        <p>Order ID: {order._id}</p>
                        <p>Amount: ${order.totalPrice}</p>
                        <p>Status: {order.orderStatus}</p>
                    </Card.Grid>
                ))}
            </Card>
        </div>
    );
};

export default Dashboard;