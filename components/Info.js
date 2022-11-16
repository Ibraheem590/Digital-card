import React from "react"

export default function Info(){
    return (
        <div className = "info--container">
            <img src="./IMG3.jpeg" className="info-picture" />
            <h2>Ibrahim Musa</h2>
            <h5>Frontend Developer</h5>
            <p>ibrahim.website</p>
            <button className ="info-btn"><i className="fa-solid fa-envelope"></i> Email</button>
            <button className="info-btn btn-blue"><i className="fa-brands fa-linkedin"></i> Linkedin</button>
        </div>
    )
}