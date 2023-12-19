import React from 'react'
import { recentOrders } from '../../data/data';

function Orders() {
    return (
        <div className="order">
            <div className="head">
                <h3>Recent Orders</h3>
                <i className='bx bx-search'></i>
                <i className='bx bx-filter'></i>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Date Order</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        recentOrders.map(order => {
                            return (
                                <tr key={order.id}>
                                    <td>
                                        <img src={order.user.avatar} />
                                        <p>{order.user.name}</p>
                                    </td>
                                    <td>{order.dateOrder}</td>
                                    <td><span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></td>
                                </tr>
                            )
                        })
                    }                    
                </tbody>
            </table>
        </div>
    )
}

export default Orders
