import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import TechIcon from '../components/models/tech_logo_models/TechIcon.jsx';
import TitleHeader from '../components/TitleHeader.jsx';
import { techStackIcons, techStackImgs } from '../constants/index.js';

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo(
            '.tech-card',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top center'
                }
            }
        );
    });
  return (
    <div id="skills" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
            <TitleHeader
                title="How I Can Contribute & My Key Skills"
                sub="🤝 The Skills I Bring to the Table"
            />
            <div className="tech-grid">
                {techStackIcons.map((techStackIcon, index) => (
                    <div key={index} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-animated-bg"/>
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <TechIcon icon={techStackIcon}/>
                            </div>
                            <div className="padding-x w-full">
                                <p>{techStackIcon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* This is for the img part */}
                {/*{techStackImgs.map((techStackImg, index) => (
                    <div key={index} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                        <div className="tech-card-animated-bg"/>
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper">
                                <img src={techStackImg.imgPath}/>
                            </div>
                            <div className="padding-x h-full w-full">
                                <p>{techStackImg.name}</p>
                            </div>
                        </div>
                    </div>
                ))}*/}
            </div>
        </div>
    </div>
  )
}

export default TechStack