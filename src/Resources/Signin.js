import React from "react";

const Signin = (props) => {
    const {btnName} = props;
    return (
        <>
        
        <a href="#"><button className="btn">{btnName}</button></a>
        </>
    );
};

export default Signin;