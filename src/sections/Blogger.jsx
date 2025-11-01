import { words } from '../constants/index.js'
import Button from '../components/Button.jsx'
import BloggerExperience from '../components/models/blogger_models/BloggerExperience.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Blogger = () => {

    useGSAP(() => {
        gsap.fromTo(
            '.hero-text h1',
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

    return(
        <section id="hero" className="relative overflow-hidden">
            <div className="absolute top-0 left-0 z-10">
                <img src="/images/bg.png" alt="background"/>
            </div>
            <div className="hero-layout">
                {/*LEFT: HERO CONTENT*/}
                <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                    <div className="flex flex-col gap-7">
                        <div className="hero-text">
                            <h1>Sharing my</h1>
                            <h1>knowledge on</h1>
                            <h1>Software Development</h1>
                        </div>
                        <p className='text-white-50 md:text-xl relative z- 10 pointer-events-none'> Hero you can find a collection of posts I make on my spare time.</p>
                    </div>
                </header>
                {/*RIGHT: 3D MODEL*/}
                <figure>
                    <div className='hero-3d-layout'>
                        <BloggerExperience/>
                    </div>
                </figure>
            </div>
        </section>
    )
}

export default Blogger