import React from 'react'

const LOCAL_BASE = "http://localhost:5000"

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

export default ArtCard;