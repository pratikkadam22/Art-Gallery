import React from 'react';
import PropTypes from 'prop-types';

const LOCAL_BASE = "http://localhost:5000"

/**
 * A functional component to render a single Card for an artwork in the gallery.
 * 
 * @component 
 */
function ArtCard(props) {
    const {art, deleteHandler} = props;
    return (
        <div className="col-sm-3 pb-3">
            <div className="card bg-dark text-white">
            <img className="card-img-top" src={LOCAL_BASE + art.picture} alt="Card" />
            <div className="card-body">
            <h5 className="card-title">{art.name}</h5>
            <p className="card-text">Artist: <b>{art.artist}</b></p>
            <p className="card-text">Buyer: <b>{art.buyer}</b></p>
            <button type="button" onClick={() => deleteHandler(art.name)} className="btn btn-danger">Remove</button>
            </div>
            </div>
        </div>
    )
}

ArtCard.propTypes = {
    /**
     * An object with the details of a single Artwork.
     */
    art: PropTypes.object.isRequired,
    /**
     * The function that updates the list of current Arts in the state of parent Homepage component.
     */
    deleteHandler: PropTypes.func.isRequired
}

export default ArtCard;