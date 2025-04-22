import { useState } from 'react';
import './FavoriteColor.css';

function FavoriteColor() {
    const [favoriteColor, setFavoriteColor] = useState();

    function handleChange(event){
        const color = event.target.value;
        //console.log(`Color selected: ${ntc.name(color)}`);
        setFavoriteColor(ntc.name(color)[1]);
    }

    const style = favoriteColor ? `background-color: ${favoriteColor}` : "";

    return(
        <div className="favorite-color">
            {favoriteColor && <h2>Favorite Color is: {favoriteColor}</h2>}
            <p>
                <input type="color" onChange={handleChange}/>
                &nbsp; Choose your favorite color.
            </p>
        </div>
    )
}

export default FavoriteColor;