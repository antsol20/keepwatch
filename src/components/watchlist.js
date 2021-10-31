import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Watchlist = ({ watches, onDelete }) => {

    return (

        <div class="wrapper">
            {watches.map((entry) => (<><div className="one">{entry.Description}</div>
                <div className="two">{entry.Url}</div><div className="three">
                    <FaTimes style={{ color: 'red' }} onClick={() => onDelete(entry.Url)} /></div>
            </>
            ))}
        </div>

    )
}

export default Watchlist
