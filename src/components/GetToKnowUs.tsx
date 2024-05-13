import { Link } from "react-router-dom";
import FooterTitle from './FooterTitle'
import './GetToKnowUs.css'

const GetToKnowUs = () => {
    return (
        <div className='get-to-know-us'>
            <FooterTitle footerTitle="About Us"/>
            <div className="footer-links">
                <ul>
                    <li>
                        <Link to="/About">Why We Exist</Link>
                    </li>
                    <li>
                        <Link to="/OurPeople">Our People</Link>
                    </li>
                    <li style={{color: "white"}}>
                        <Link to="/Contact">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default GetToKnowUs;