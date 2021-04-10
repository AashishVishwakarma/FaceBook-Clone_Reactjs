import React, { useState } from 'react'
import './HomeHeader.css';
import SearchIcon from '@material-ui/icons/Search';
import { Link, useHistory } from 'react-router-dom';
import { Avatar } from '@material-ui/core';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import TelegramIcon from '@material-ui/icons/Telegram';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { auth } from './firebase.js';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function HomeHeader({ user }) {
    const history = useHistory('');

    if (user === false) {
        history.push("/login")
    }

    const logout = (event) => {
        event.preventDefault();
        auth.signOut();
        history.push("/login");
    }
    return (
        <div className="homeHeader">
            <div className="homeHeader__left">
                <Link to="/">
                    
                    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2016%2F11%2FFacebook-logo.png&imgrefurl=https%3A%2F%2F1000logos.net%2Ffacebook-logo%2F&tbnid=m7scPhEDTs3ZSM&vet=12ahUKEwi4sruf8fLvAhXp33MBHS5nA74QMygBegUIARDRAQ..i&docid=ru3aYtGX_RZZDM&w=2000&h=1400&q=facebook%20logo&client=firefox-b-d&ved=2ahUKEwi4sruf8fLvAhXp33MBHS5nA74QMygBegUIARDRAQ" alt="Facebook Logo" className="homeHeader__logo" />
                </Link>
            </div>

            <div className="homeHeader__inputSearch">
                <input type="text" placeholder="Search" />
                <SearchIcon className="homeHeader__inputButton" /> 
            </div>
            <div className="homeHeader__icons">
                <section>
                    <Avatar className="homeHeader__avatar" alt="" src="" />
                    <h3 className="homeHeader__name">{user?.displayName}</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Home</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Find Friends</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <h3 className="homeHeader__name">Create</h3>
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <GroupAddIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <TelegramIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <NotificationsIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <AssignmentIndIcon />
                </section>

                <h3 className="homeHeader__dash"> | </h3>

                <section>
                    <div className="dropdown">
                        <ArrowDropDownIcon className="dropdown" />
                        <div className="dropdown-content">
                            <a onClick={logout}><p>Logout</p></a>
                        </div>
                    </div>
                </section>

                <h3 className="homeHeader__dash"> | </h3>
            </div>
        </div>
    )
}

export default HomeHeader
