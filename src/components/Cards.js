import React, {useState} from 'react';
import '../index.css';
import images from './cardsData';

function Cards(props) {

    const [displayCards, setDisplayCards] = useState(images);
    const [clickedImg, setClickedImg] = useState([]);

    const handleClick = (imgId) => {
        const sortedArray = [...displayCards].sort(() => Math.random() - 0.5);
        setDisplayCards(sortedArray);

        if(clickedImg.includes(imgId)){
            props.restartScore();
            setClickedImg([])
        } else {
            props.handleIncrement();
            setClickedImg([...clickedImg,imgId ]);
        }
        
    };

    const imageList = displayCards.map((image) => (
                    <img 
                    src={image.name} 
                    alt={image.name}
                    key={image.id}
                    onClick={() => handleClick(image.id)}
                    className='card'
                    />
            ));

    return(
        <div className='cards-grid'>
            {imageList} 
        </div>
    );
}

export default Cards;