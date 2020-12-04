import React from 'react'

const LOCAL_BASE = "http://localhost:5000"

function ArtCard(props) {
    const {art} = props;
    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <img src={LOCAL_BASE + art.picture} className="img-responsive" alt=""/>
        <div className="description">
            Art name: {art.name} <br />
            Artist: {art.artist_name} <br />
            Buyer: {art.buyer_name}
        </div>        
        </div>
    )
}

export default ArtCard;