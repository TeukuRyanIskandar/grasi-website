import './AboutHome.css'
import LearnMoreButton from './LearnMoreButton'
import AboutHomeImg from '../assets/WhatsApp-Image-2023-12-19-at-14.53.46.jpeg'

const AboutHome = () => {
return (
    <div className="about-home">
        <div className='about-home-img-container'>
            <img className="about-home-img-" src={AboutHomeImg} alt="Indonesian Students In Classroom" />
        </div>
        <div className='about-home-text'>
            <h2>About Us</h2><br />
            <p>Gerakan Rakyat Sadar Intelektual (GRASI) is made up of a group of social activists <br /> and educators that have a burning passion in helping Indonesian migrant workers, <br /> in particular in Sabah, Malaysia</p>
        </div>
        <div className='button-wrapper'>
            <LearnMoreButton />
        </div>
    </div>
)
}

export default AboutHome;