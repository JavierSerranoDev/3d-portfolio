import Carousel from '../components/Carousel.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ProjectHighlight = ({ title, date, description, media, html }) => {

    useGSAP(() => {
        gsap.fromTo(
            ['.title-text h1', 'p'],
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            }
        );
    });

    const getCarouselImgPaths = () => {
        const imgPaths = [];

        for (let i = 0; i < media.length; i++){
            if(media[i].type === "IMAGE")
                imgPaths[i] = media[i].absolute_url;
        }

        return imgPaths;
    }

  return (
    <section id="work-highlight" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background"/>
        </div>
        <div className="project-highlight-layout">
            <div className="project-highlight-header">
                {/*LEFT: TITLE CONTENT*/}
                <header className="project-highlight-title">
                    <div className="flex flex-col gap-7">
                        <div className="title-text">
                            <h1>{title}</h1>
                        </div>
                        <p className='white font-bold md:text-xl relative z-10 pointer-events-none'>{`Release date: ${date}`}</p>
                        <p className='text-white-50 md:text-xl relative z-10 pointer-events-none'>{description}</p>
                    </div>
                </header>
                {/*RIGHT: IMG CONTENT*/}
                    <div className="project-highlight-img-container">
                        {media && media.length > 0 && (
                            <Carousel images={getCarouselImgPaths()}/>
                        )}
                    </div>
            </div>

            {/* HTML CONTENT — outside the header grid, inside the layout */}
            {html && (
                <div
                    className="w-full mt-10 px-5 md:px-20 pb-20"
                    dangerouslySetInnerHTML={{ __html: html }}
                />
            )}
        </div>
    </section>
  )
}

export default ProjectHighlight