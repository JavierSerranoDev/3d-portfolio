import { HashLink } from 'react-router-hash-link';
import MenuSvg from '../svg/MenuSvg.jsx'

const MobileMenu = ({ navLinks, handleOnClick, openNavigation }) => {
  return (
    <div className="mobile-menu">
      <div className="mobile-menu-inner">
        <button className="ml-auto lg:hidden px-3" onClick={handleOnClick}>
                <MenuSvg openNavigation={openNavigation}/>
            </button>
        <ul>
            {navLinks.map(({link, name}, index) => (
              <li key={index} onClick={handleOnClick}>
                  {
                    <HashLink smooth to={`/${link}`}>
                        <span>{name}</span>
                        <span className="underline"/>
                    </HashLink>
                  }
              </li>
            ))}
            <HashLink smooth to="/#contact" className="contact-btn mt-10">
                <div className="inner" onClick={handleOnClick}>
                    <span>Contact me</span>
                </div>
            </HashLink>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu