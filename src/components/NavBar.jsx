import { useEffect, useState } from 'react'
import { navLinks } from '../constants/index.js'
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function NavBar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            <HashLink smooth to="/#contact" className="contact-btn group">
                <div className="inner">
                    <span>Contact me</span>
                </div>
            </HashLink>
        </div>
    </header>
  )
}

export default NavBar