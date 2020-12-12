import React, { useEffect } from "react";
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import MicIcon from '@material-ui/icons/Mic';
import { key, cx } from "../API";
import axios from "axios";
import Show from "./Show";
import SearchIcon from '@material-ui/icons/Search';
import ImageIcon from '@material-ui/icons/Image';
import ClassIcon from '@material-ui/icons/Class';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const Search = (props) => {
    const goBack = () => {
        props.history.push("/");
    };
    const [state, setState] = React.useState(
        props.location.state ? props.location.state : ""
    );
    const [results, setResults] = React.useState([]);
    const [info, setInfo] = React.useState("");
    const searchGoogle = async (e) => {
        e.preventDefault();
        try {
        const response = await axios.get(
            `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
        );
        if (response) {
            setResults(response.data.items);
            setInfo(response.data.searchInformation);
        }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        async function getPosts() {
        if (props.location.state) {
            try {
            const response = await axios.get(
                `https://www.googleapis.com/customsearch/v1?key=${key}&cx=${cx}&q=${state}`
            );
            if (response) {
                setResults(response.data.items);
                setInfo(response.data.searchInformation);
            }
            } catch (error) {
                console.log(error);
            }
        }
        }
        getPosts();
    // eslint-disable-next-line
    }, []);
    return (
        <div className="search">
            <div className="search__form">
                <div className="search__form-logo">
                    <img src="/Images/Logo.png" alt="logo" onClick={goBack} />
                </div>
                <div className="search__form-input">
                    <form className="home__form" onSubmit={searchGoogle}>
                        <div className="home__input__item">
                            <input type="text" className="home__input" spellCheck="false" value={state} onChange={(e) => setState(e.target.value)} required />
                            <MicIcon className="microphone" />
                            <SearchSharpIcon className="search__icon" />
                        </div>
                    </form>
                    <div className="misc">
                        <div className="misc_component active">
                            <SearchIcon />
                            <p>All</p>
                        </div>
                        <div className="misc_component">
                            <ImageIcon />
                            <p>Images</p>
                        </div>
                        <div className="misc_component">
                            <ChromeReaderModeIcon />
                            <p>News</p>
                        </div>
                        <div className="misc_component">
                            <ClassIcon />
                            <p>Books</p>
                        </div>
                        <div className="misc_component">
                            <VideoLibraryIcon />
                            <p>Videos</p>
                        </div>
                        <div className="misc_component">
                            <MoreVertIcon />
                            <p>More</p>
                        </div>
                    </div>
                </div>
            </div>
            <Show results={results} info={info} />
        </div>
    );
};

export default Search;