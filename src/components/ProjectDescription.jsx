// src/components/ProjectDescription.jsx
import React from 'react';
import projectImage from '../assets/Chat bot-bro.png';

const ProjectDescription = () => {
    return (
        <div>
            <section className="project-description">
                <h2>About Kaleem</h2>
                <p>
                    Kaleem is a <strong>smart customer support</strong> solution powered by <strong>Generative AI</strong>. 
                    Leveraging your data, it provides <strong>accurate</strong> and <strong>up-to-date answers</strong> 
                    to customer inquiries, ensuring satisfaction and efficiency.
                </p>
            </section>
            <div className="project-image">
                <img src={projectImage} alt="Kaleem Project" />
            </div>
        

        </div>
    );
};

export default ProjectDescription;
