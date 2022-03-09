import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <h1>Professional Website Frontend development</h1>
                <Typed
                    className="typed-text"
                    strings={["Frontend Web Design", "Frontend Web Development", "Frontend Dev", "User Interface and User Experience"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                {/* <a href="#" className="btn-main-offer">Contact me</a> */}
            </div>
        </div>
    );
}

export default Header;