import React, { useState, useEffect } from 'react'
import './FeaturedInfo.scss'
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import { userRequest } from '../../requestMethods';

const FeaturedInfo = () => {
    const [income, setIncome] = useState([])
    const [perc, setPerc] = useState(0)    


    useEffect(() => {
        const getIncome = async () => {
            try {
                const res = await userRequest.get('orders/income')

                console.log(res.data);
                setIncome(res.data)         
                setPerc(
                    (res.data[1].total - res.data[0].total) * 100 / 
                    ((res.data[1].total + res.data[0].total) / 2)
                )
            } catch (error) {
                console.log(error);
            }
        }
        getIncome()        
    }, [])    

    
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${income.length > 1 ? income[1].total : null}</span>
                    <span className="featuredMoneyRate">
                        %{Math.floor(Math.abs(perc))}
                        { perc > 0 ? <ArrowUpward className="featuredIcon"/> :
                            <ArrowDownward className="featuredIcon negative"/>
                        }
                        
                    </span>
                </div>

                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">${income.length > 1 ? income[1].total : null}</span>
                    <span className="featuredMoneyRate">
                        %{Math.floor(Math.abs(perc))}
                        { perc > 0 ? <ArrowUpward className="featuredIcon"/> :
                            <ArrowDownward className="featuredIcon negative"/>
                        }
                    </span>
                </div>

                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$23</span>
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
