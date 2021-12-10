import React from 'react'
import { Link } from 'react-router-dom'
import './WidgetSm.scss'
import { Visibility } from '@material-ui/icons';

const WidgetSm = () => {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <div className="widgetSmImgNameWrap">
                        <img src="https://picsum.photos/200/200?random=1" alt="new member image" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Stephen Curry</span>
                            <span className="widgetSmUserTitle">Basketball Player</span>
                        </div>
                    </div>
                    <Link to="/users/1">
                        <button className="widgetSmButton">                        
                            <Visibility className="widgetSmIcon" />View User                                       
                        </button>
                    </Link>         
                </li>
                <li className="widgetSmListItem">
                    <div className="widgetSmImgNameWrap">
                        <img src="https://picsum.photos/200/200?random=2" alt="new member image" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Andrew Wiggins</span>
                            <span className="widgetSmUserTitle">Basketball Player</span>
                        </div>
                    </div>                    
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />View User
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <div className="widgetSmImgNameWrap">
                        <img src="https://picsum.photos/200/200?random=3" alt="new member image" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Klay Thompson</span>
                            <span className="widgetSmUserTitle">Basketball Player</span>
                        </div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />View User
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <div className="widgetSmImgNameWrap">
                        <img src="https://picsum.photos/200/200?random=4" alt="new member image" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Jordan Poole</span>
                            <span className="widgetSmUserTitle">Basketball Player</span>
                        </div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />View User
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <div className="widgetSmImgNameWrap">
                        <img src="https://picsum.photos/200/200?random=5" alt="new member image" className="widgetSmImg" />
                        <div className="widgetSmUser">
                            <span className="widgetSmUsername">Draymond Green</span>
                            <span className="widgetSmUserTitle">Basketball Player</span>
                        </div>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon" />View User
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default WidgetSm
