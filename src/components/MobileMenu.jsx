import { HashLink } from 'react-router-hash-link';

const MobileMenu = ({ navLinks }) => {
  return (
    <div className="mobile-menu">
      <div className="inner">
        <ul>
            {navLinks.map(({link, name}, index) => (
              <li key={index}>
                  {
                    <HashLink smooth to={`/${link}`}>
                        <span>{name}</span>
                        <span className="underline"/>
                    </HashLink>
                  }
              </li>
            ))}
            <HashLink smooth to="/#contact" className="contact-btn mt-10">
                <div className="inner">
                    <span>Contact me</span>
                </div>
            </HashLink>
        </ul>
      </div>
    </div>
  )
}

export default MobileMenu