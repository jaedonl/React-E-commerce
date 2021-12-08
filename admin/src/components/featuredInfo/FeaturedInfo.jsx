import React from 'react'
import './FeaturedInfo.scss'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const FeaturedInfo = () => {
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