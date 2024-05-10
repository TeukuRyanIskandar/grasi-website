import './Cards.css'
import './CARDS_DATA'

const Cards = ( {colour, image, title, content} ) => {
    return (
        <div className="cards" style={{backgroundColor: colour}}>
            <img src={image} alt={title} />
            <p>{content}</p>
        </div>
    )
}

export default Cards;