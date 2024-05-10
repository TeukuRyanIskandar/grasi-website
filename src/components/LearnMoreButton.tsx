import { Link } from "react-router-dom";
import './LearnMoreButton.css'

const LearnMoreButton = ({link}) => {

    return (
        <div className="button-wrapper">
            <button className="learn-more-button">
                <Link to={link} className="button-link">Learn More</Link>
            </button>
        </div>
    )
}

export default LearnMoreButton;
