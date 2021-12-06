import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import './Home.scss'

const Home = () => {
    return (
        <div className="home">
            <div className="homeWrapper">
                <FeaturedInfo/>
                <Chart/>
            </div>
        </div>
    )
}

export default Home
