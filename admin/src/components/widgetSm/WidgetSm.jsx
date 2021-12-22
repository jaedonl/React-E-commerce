import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import './WidgetSm.scss'
import { Visibility } from '@material-ui/icons';
import { userRequest } from '../../requestMethods';
// import { format } from 'timeago.js'

const WidgetSm = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userRequest.get("users/?new=true")
                setUsers(res.data)
            } catch {}  
        }
        getUsers()        
    }, [])    

    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                {                    
                    users.map((user, idx) => (                                    
                        <li className="widgetSmListItem" key={user._id}>
                            <div className="widgetSmImgNameWrap">
                                <img src={user.img || "/assets/profile/noAvatar.png"} alt="new member image" className="widgetSmImg" />
                                <div className="widgetSmUser">
                                    <span className="widgetSmUsername">{user.username}</span>
                                    <span className="widgetSmUserTitle">{new Date(user.createdAt).toLocaleDateString("en-US")}</span>
                                </div>
                            </div>
                            <Link to="/users/1">
                                <button className="widgetSmButton">                        
                                    <Visibility className="widgetSmIcon" />View User                                       
                                </button>
                            </Link>   
                        </li>   
                ))}                            
            </ul>
        </div>
    )
}

export default WidgetSm
