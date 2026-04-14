import Carousel from '../components/Carousel.jsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const WorkHighlight = ({ topProjectsImgPaths }) => {

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

  return (
    <section id="work-highlight" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background"/>
        </div>
        <div className="work-highlight-layout">
            <div className="work-highlight-header">
                {/*LEFT: TITLE CONTENT*/}
                <header className="work-highlight-title">
                    <div className="flex flex-col gap-7">
                        <div className="title-text">
                            <h1>Shaping Works</h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                        <p className='text-white-50 md:text-xl relative z- 10 pointer-events-none'> Hi, I'm Javier, a developer based in Mexico with a passion for code.</p>
                    </div>
                </header>
                {/*RIGHT: CAROUSEL CONTENT*/}
                <div className="work-highlight-carousel">
                    {topProjectsImgPaths && topProjectsImgPaths.length > 0 && (
                        <Carousel images={ topProjectsImgPaths } />
                    )}
                </div>
            </div>
        </div>
    </section>
  )
}

export default WorkHighlight