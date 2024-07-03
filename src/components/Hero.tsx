import homeHero from '../assets/4f4ae328-d22c-4318-b11c-859f174284f4-2.jpg'
import './Hero.scss'

const Hero = () => {
    return (
        <section className='hero-container'>
            <div className='image-container'>
                <picture>
                    <img className="hero-img" src={homeHero} alt="Indonesian Kids" />
                </picture>
            </div>
        </section>
    )

}

export default Hero;