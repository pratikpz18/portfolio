import React, { useEffect, useState } from 'react';

const Resume = () => {
    
    return (
        <div className="Resume ">
            <h6>Click Below Button to download Resume</h6>
            <button className="download-btn">
                <a className="download-btn-a" href="../resume.pdf" download="Pratik Resume">
                Download Resume
                </a>
            </button>
        </div>
    )
}

export default Resume;
