import { Link } from "react-router-dom";
import './LearnMoreButton.css'

const LearnMoreButton = () => {

    return (
        <button >
            <Link to={"/About"} >Learn More</Link>
        </button>
    )
}

export default LearnMoreButton;
