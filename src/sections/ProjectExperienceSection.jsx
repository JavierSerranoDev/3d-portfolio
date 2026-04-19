import TitleHeader from '../components/TitleHeader.jsx';
import ToolGlowCard from '../components/ToolGlowCard.jsx';
import toolsIndex from '../constants/toolsIndex.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const generateGradient = (enrichedTools) => {
    if (!enrichedTools || enrichedTools.length === 0) return '';

    const stops = [];
    const sliceSize = 100 / enrichedTools.length;
    const transitionColor = '#272F36';

    enrichedTools.forEach((tool, index) => {
        const start = index * sliceSize;
        const end = (index + 1) * sliceSize;
        const mid = (start + end) / 2;

        if (index === 0) {
            stops.push(`rgba(69, 222, 196, 0) 0%`);
        } else {
            stops.push(`${transitionColor} ${start}%`);
        }
        stops.push(`${tool.color} ${mid}%`);
        if (index === enrichedTools.length - 1) {
            stops.push(`${transitionColor} ${end}%`);
        }
    });

    return `linear-gradient(180deg, ${stops.join(', ')})`;
};

const ProjectExperienceSection = ({ tools }) => {

    const enrichedTools = tools?.map((entry) => {
        const toolData = toolsIndex.find((t) => t.id === entry.id);
        return { ...toolData, ...entry };
    }) ?? [];

     if (enrichedTools.length === 0) return null;

    const gradient = generateGradient(enrichedTools);

    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%'
                }
            });
        });
        gsap.utils.toArray('.expText').forEach((text) => {
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 60%"'
                }
            });
        });
    }, []);

    useGSAP(() => {
        if (!enrichedTools || enrichedTools.length === 0) return;

        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                    gsap.to('.timeline', { scaleY: 1 - self.progress });
                }
            }
        });
    }, [enrichedTools]);

   return (
        <div id="experience" className="w-full md:mt-40 mt-20 section-padding xl:px-0">
            <div className="w-full h-full md:px-20 px-5">
                <TitleHeader title="Tools Used" sub="🧰 Tech Stack"/>
                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {enrichedTools.map((card, index) => (
                            <div key={index} className="exp-card-wrapper">
                                <div className="xl:w-2/6">
                                    <ToolGlowCard card={card} index={index} />
                                </div>
                                <div className="xl:w-4/6">
                                    <div className="flex items-start">
                                        <div className="timeline-wrapper">
                                            <div className="timeline" />
                                            <div
                                                className="w-1 h-full gradient-line"
                                                style={gradient ? { background: gradient } : {}}
                                            />
                                        </div>
                                        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                            <div className="timeline-logo">
                                                <img src={card.timeline_icon} alt={card.name} />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-3xl">{card.name}</h1>
                                                <p className="text-[#839cb5] italic">Responsibilities</p>
                                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                    {card.responsibilities?.map((responsibility, i) => (
                                                        <li key={i} className="text-lg">{responsibility}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectExperienceSection;