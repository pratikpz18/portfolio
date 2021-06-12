import React, { useEffect, useState } from 'react';
import db from '../firebase';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {
    const [projects,setProjects] = useState([]);

    useEffect(() => {
        db
        .collection('projects')
        .onSnapshot((snapshot) => {
            setProjects(
                snapshot.docs.map(doc => ({
                    projectDescription:doc.data().projectDescription,
                    projectName: doc.data().projectName,
                    projectUrl:doc.data().projectUrl,
                    projectImg:doc.data().projectImg,
                }
                ))
            )
        });

    },[])
    console.log(projects)

    Aos.init({ duration:1500 });


    return (
        <div className="project">
            <h2>Projects</h2>
            <div className="projects-block">
                {
                    projects.map((project,index) => (
                        <div data-aos="fade-right"
                            data-aos-offset="250"
                            data-aos-easing="ease-in-sine"
                            className="project-data" key={index}>
                            <div className="description ">
                                <span>{project.projectDescription}</span><br></br>
                                <a href={project.projectUrl}>Code</a>
                            </div>
                            <div className="project-info">
                                <h4 className="project-name">{project.projectName}</h4>
                                <img src={project.projectImg} alt={project.projectName} className="img"></img>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects;
