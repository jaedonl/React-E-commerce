import React, {useState, useEffect} from 'react'
import './WidgetLg.scss'
import { userRequest } from '../../requestMethods';
import { format } from 'timeago.js'


const WidgetLg = () => {
    const [orders, setOrders] = useState([])    

    useEffect(() => {
        const getOrders = async () => {
            try {
                const res = await userRequest.get("orders")
                setOrders(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getOrders()
    }, [] )

    useEffect(() => {
        console.log(orders);
    })


    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
    };

    return (
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest transactions</h3>

            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                { orders.map((order) => (
                    <tr className="widgetLgTr">
                        <td className="widgetLgUser">
                            <span className="widgetLgName">{order.userId}</span>
                        </td>
                        <td className="widgetLgDate">{Date(order.createdAt).slice(0, 16)}</td>
                        {/* <td className="widgetLgDate">{format(order.createdAt)}</td> */}
                        <td className="widgetLgAmount">${order.amount}</td>
                        <td className="widgetLgStatus">
                            <Button type={order.status} />
                        </td>
                    </tr>
                ))}
                
                {/* <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                        src="https://picsum.photos/200/200?random=1"
                        alt=""
                        className="widgetLgImg"
                        />
                        <span className="widgetLgName">Stephen Curry</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                        src="https://picsum.photos/200/200?random=2"
                        alt=""
                        className="widgetLgImg"
                        />
                        <span className="widgetLgName">Andrew Wiggins</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Declined" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                        src="https://picsum.photos/200/200?random=3"
                        alt=""
                        className="widgetLgImg"
                        />
                        <span className="widgetLgName">Klay Thompson</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>

                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img
                        src="https://picsum.photos/200/200?random=4"
                        alt=""
                        className="widgetLgImg"
                        />
                        <span className="widgetLgName">Jordan Poole</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">$122.00</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr> */}

            </table>
        </div>
    )
}

export default WidgetLg
