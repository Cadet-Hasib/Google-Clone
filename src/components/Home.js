import React from 'react';
import Header from './Header'
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MicIcon from '@material-ui/icons/Mic';

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <div className="home_container">
                <div className="home__logo">
                    <img src="/Images/Logo.png" alt="Logo" />
                </div>
                <form className="home__form">
                    <div className="input">
                        <SearchSharpIcon />
                        <input type="text" className="home__input" />
                        <MicIcon />
                    </div>
                    
                    <div className="home__group">
                        <input type="submit" value="Google Search" />
                        <input type="submit" value="I'm Feeling Lucky" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home
