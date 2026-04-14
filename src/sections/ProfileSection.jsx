import { useState } from 'react';
import '../css/ProfileSection.css';

export default function ProfileSection() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            className="padding-x-lg xl:mt-0 mt-32 mb-30"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            style={
                isHovering
                    ? {
                            '--glow-x': `${mousePosition.x}px`,
                            '--glow-y': `${mousePosition.y}px`,
                        }
                    : {}
            }
        >
            <div className="profile-content">
                <div className="profile-image-container">
                    <img
                        src="images/profile.png"
                        alt="Profile"
                        className="profile-image"
                    />
                </div>
                <div className="profile-info">
                    <ul className="profile-list">
                        <li className="text-white-50 md:text-xl relative z- 10 pointer-events-none">
                            <strong>Name:</strong> Jose Javier Serrano Solis
                        </li>
                        <li className="text-white-50 md:text-xl relative z- 10 pointer-events-none">
                            <strong>Education:</strong> B.S. in Software Engieering, UADY, Mexico.
                        </li>
                    </ul>
                    <ul className="profile-list mt-5">
                        <li className="text-white-50 md:text-xl relative z- 10 pointer-events-none">
                            <a href="https://x.com/javi_pepper_" target="_blank" rel="noreferrer">
                                <strong>Twitter</strong>
                            </a>
                        </li>
                        <li className="text-white-50 md:text-xl relative z- 10 pointer-events-none">
                            <a href="https://www.linkedin.com/in/jose-javier-serrano-solis" target="_blank" rel="noreferrer">
                                <strong>LinkedIn</strong>
                            </a>
                        </li>
                        <li className="text-white-50 md:text-xl relative z- 10 pointer-events-none">
                            <a href="https://github.com/JavierSerranoDev/" target="_blank" rel="noreferrer">
                                <strong>GitHub</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}