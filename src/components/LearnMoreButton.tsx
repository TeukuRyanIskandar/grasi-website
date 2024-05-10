import { Link } from "react-router-dom";
import './LearnMoreButton.css'

const LearnMoreButton = () => {

    return (
        <button className="learn-more-button">
            <Link to={"/About"} className="button-link">Learn More</Link>
        </button>
    )
}

export default LearnMoreButton;
