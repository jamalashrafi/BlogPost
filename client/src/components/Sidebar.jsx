import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="dashboardContainer__sidebarMain">
            <Link to='/mypost'>My Post</Link>
            <Link to='/createpost'>Create Post</Link>
            <Link to='/myprofile'>My Profile</Link>
        </div>
    )
}

export default Sidebar
