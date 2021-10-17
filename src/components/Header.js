import React from "react"
import Typed from "react-typed"
import Example from "./Animation"

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <Typed
                style={{color:"white"}}
                className="typed-text"
                strings={["HeLLo "," I'm Goanar Abraham","FullStack Developer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
            </div>
            <div className="buttons">
                <button className=" btn btn-success m-2 px-2 button" onClick={()=>window.open("https://github.com/mickg13?tab=repositories")}>Protfolio</button>
                <button className="m-2 p-2 btn btn-danger" onClick={()=>window.open("https://docs.google.com/document/u/0/d/1A4UongUfZBG0HrK-fvtnr06Ao_-cvDSASImx2_ESgy0/mobilebasic")}>View CV</button>
            </div>
            <Example/>
        </div>
    )
}

export default Header
