import React, { useState, useEffect, useMemo} from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import './Home.scss'
import { analyticsData } from '../../dummyData';
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { userRequest } from '../../requestMethods';

const Home = () => {
    const [userStats, setUserStats] = useState([])

    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ], 
        []
    )
    

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get('/users/stats')
                res.data.map(item => 
                    setUserStats((prev) => [
                        ...prev,
                        {name: MONTHS[item._id-1], "Active User": item.total},
                    ])
                )
            } catch (error) {
                console.log(error);
            }
        }        
        getStats()
    }, [MONTHS])
    

    return (
        <div className="home">
            <div className="homeWrapper">
                <FeaturedInfo/>
                <Chart 
                    data={userStats} 
                    title="Sales / Users Analytics" 
                    dataKey="Active User" 
                    // dataKey2="Sales Rate" 
                    grid
                />
                <div className="homeWidgets">
                    <WidgetSm/>
                    <WidgetLg/>
                </div>
            </div>
        </div>
    )
}

export default Home
