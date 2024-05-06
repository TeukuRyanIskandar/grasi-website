import homeHero from '../assets/4f4ae328-d22c-4318-b11c-859f174284f4-2.jpg'
import './Hero.css'

const Hero = () => {
    return (
        <div className='img-container'>
            <img className="hero-img" src={homeHero} alt="Indonesian Kids" />
        </div>
    )

}

export default Hero;