import React from 'react'
import { Link } from "react-router-dom";
import './User.scss'
import { CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid, Publish } from "@material-ui/icons";

const User = () => {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="./newuser">
                    <button className="userAddButton">Create</button>
                </Link>
            </div>

            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://picsum.photos/500/500?random=1" alt="" className="userShowImg" />

                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Stephen Curry</span>
                            <span className="userShowUserTitle">Basketball Player</span>
                        </div>
                    </div>

                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon" />
                            <span className="userShowInfoTitle">curry94</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon" />
                            <span className="userShowInfoTitle">06.14.1994</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroid className="userShowIcon" />
                            <span className="userShowInfoTitle">+1 123 456 67</span>
                        </div>
                        <div className="userShowInfo">
                            <MailOutline className="userShowIcon" />
                            <span className="userShowInfoTitle">curry@email.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationSearching className="userShowIcon" />
                            <span className="userShowInfoTitle">New York | USA</span>
                        </div>
                    </div>
                </div>

                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="curry94" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Stephen Curry" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="curry94@email.com" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+1 123 456 67" className="userUpdateInput" />
                            </div>

                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="New York | USA" className="userUpdateInput" />
                            </div>
                        </div>

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img className="userUpdateImg" src="https://picsum.photos/500/500?random=1" alt="" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon" />
                                </label>
                                <input type="file" id="file" style={{ display: "none" }} />
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>            
        </div>
    )
}


export default User
