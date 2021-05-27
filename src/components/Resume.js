import React, { useEffect, useState } from 'react';

const Resume = () => {
    
    return (
        <div>
            <h3>Click Below Button to download Resume</h3>
            <button className="download-btn">
                <a className="download-btn" href="../resume.pdf" download="Pratik Resume">
                Download Resume
                </a>
            </button>
        </div>
    )
}

export default Resume;
