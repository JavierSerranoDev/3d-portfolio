import { useEffect, useState } from 'react'
import { navLinks } from '../constants/index.js'
import { HashLink } from 'react-router-hash-link';
import MenuSvg from '../svg/MenuSvg.jsx'
import { HamburgerMenu } from './design/Header.jsx';
import { useMediaQuery } from 'react-responsive';
import MobileMenu from './MobileMenu.jsx';

function NavBar() {
    const isAboveMobileDevice = useMediaQuery({ query: '(min-width: 768px)' });
    const [scrolled, setScrolled] = useState(false);
    const [openNavigation, setOpenNavigation] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleNavigation = () => {
        if(openNavigation) {
            setOpenNavigation(false);
        } else {
            setOpenNavigation(true);
        }
    }

    const handleClick = () => {
        setOpenNavigation(false);
    }

  return (
    <header className={`navbar ${scrolled ? 'scrolled' :  'not-scrolled'}`}>
        <div className="inner">
            <HashLink className="logo" to="/#hero">
                Javier Serrano
            </HashLink>
            <nav className="desktop">
                <ul>
                    {navLinks.map(({link, name}, index) => (
                        <li key={index} className="group">
                            {
                                <HashLink smooth to={`/${link}`}>
                                    <span>{name}</span>
                                    <span className="underline"/>
                                </HashLink>
                            }
                        </li>
                    ))}
                </ul>
            </nav>
            <nav className={`mobile ${openNavigation ? "flex" : "hidden"}`}>
                <HamburgerMenu />
                <MobileMenu navLinks={navLinks}/>
            </nav>
            <HashLink smooth to="/#contact" className="contact-btn group hidden lg:flex">
                <div className="inner">
                    <span>Contact me</span>
                </div>
            </HashLink>
            <button className="ml-auto lg:hidden px-3" onClick={toggleNavigation}>
                <MenuSvg openNavigation={openNavigation}/>
            </button>
        </div>
    </header>
  )
}

export default NavBar