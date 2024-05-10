import './OurWorkHome.css'
import LearnMoreButton from './LearnMoreButton';
import Cards from './Cards';
import { CARDS_DATA } from './CARDS_DATA';

const OurWorkHome = () => {

    return (
        <div className='our-work-home-wrapper'>
            <div className='our-work-home-text'>
                <h2>Our Work</h2>
            </div>
            <div className='our-work-home-cards'>
                {CARDS_DATA.map((cardItem) => <Cards key={cardItem.title} {...cardItem}/>)}
            </div>
            <LearnMoreButton link="/OurWork"/>
        </div>
    )
}

export default OurWorkHome;