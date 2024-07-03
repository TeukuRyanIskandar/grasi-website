import './Footer.scss'

import AboutFooter from './AboutFooter';
import GetToKnowUs from './GetToKnowUs';
import OurWorkFooter from './OurWorkFooter';

const Footer = () => {
    return (
        <footer className='footer'>
        <div className="footer-wrapper">
            <div className="footer-content-wrapper">
                <div className='footer-items-wrapper'>
                    <AboutFooter/>
                </div>
                <div className='footer-items-wrapper'>
                    <GetToKnowUs />
                </div>
                <div className='footer-items-wrapper'>
                    <OurWorkFooter />
                </div>
            </div>
        </div>
        </footer>
    )
}

export default Footer;