import { Link } from 'react-router-dom'
import './FooterTitle.css'
import FooterTitle from './FooterTitle'

const OurWorkFooter = () => {
    return (
        <div className='footer-links'>
            <FooterTitle footerTitle="Our Work"/>
            <ul>
                <li>
                    <Link to="/OurWork">Coming Soon</Link>
                </li>
            </ul>
        </div>
    )
}

export default OurWorkFooter;