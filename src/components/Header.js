import React from 'react';
import { Avatar } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';

function Header() {
    return (
        <div className="Header">
            <header>
                <nav>
                    <h1>Google</h1>
                    <ul>
                        <li><a href="https://hasibrashid.tk">Gmail</a></li>
                        <li><a href="https://hasibrashid.tk">Images</a></li>
                        <li><a href="https://hasibrashid.tk"><AppsIcon className="AppsIcons" /></a></li>
                        <li><a href="https://hasibrashid.tk"><Avatar className="Avatar" /></a></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
