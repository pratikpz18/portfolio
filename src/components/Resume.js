import React, { useEffect, useState } from 'react';

const Resume = () => {
    
    return (
        <div className="Resume ">
            <button className="download-btn">
                <a className="download-btn-a" href={process.env.PUBLIC_URL + '/resume.pdf'} download="Pratik Resume">
                Resume   <i className="fa fa-download" aria-hidden="true"></i>
                </a>
            </button>
        </div>
    )
}

export default Resume;
