import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import './Home.scss'
import { analyticsData } from '../../dummyData';
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";

const Home = () => {
    return (
        <div className="home">
            <div className="homeWrapper">
                <FeaturedInfo/>
                <Chart 
                    data={analyticsData} 
                    title="Sales / Users Analytics" 
                    dataKey1="Active User" 
                    dataKey2="Sales Rate" 
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
