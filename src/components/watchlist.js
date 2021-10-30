import React from 'react'
import { FaTimes } from 'react-icons/fa'

const entries =
    [
        {
            "Description": "Savoy",
            "Url": "https://www.gordonramsayrestaurants.com/savoy-grill/whats-on/",
            "hash": "109976c1a6af80af0427b699f499287d"
        },
        {
            "Description": "Savoy",
            "Url": "https://www.gordonramsayrestaurants.com/savoy-grill/menus/",
            "hash": "f9fcafb2cec13812c4ddd8fea294952f"
        },
        {
            "Description": "Savoy",
            "Url": "https://www.gordonramsayrestaurants.com/savoy-grill/",
            "hash": "a417c003e59054bb56193a0d5961157b"
        }
    ]



const Watchlist = () => {
    return (

        <div class="wrapper">
            {entries.map((entry) => (<><div className="one">{entry.Description}</div>
                <div className="two">{entry.Url}</div><div className="three"><FaTimes style={{color: 'red'}}/></div>
            </>
            ))}
        </div>

    )
}

export default Watchlist
