import React, { useState, useEffect } from 'react'
import './FeaturedInfo.scss'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { userRequest } from '../../requestMethods';

const FeaturedInfo = () => {
    const [income, setIncome] = useState([])

    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get('orders/income')
                setIncome(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getIncome()
    }, [])

    console.log(income);

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$54026</span>
                    <span className="featuredMoneyRate">
                        +11.4 <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>

                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$63026</span>
                    <span className="featuredMoneyRate">
                        +1.4 <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>

                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$9000</span>
                    <span className="featuredMoneyRate">
                        -2.4 <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>

                <span className="featuredSub">Compared to last month</span>
            </div>
            
        </div>
    )
}

export default FeaturedInfo
