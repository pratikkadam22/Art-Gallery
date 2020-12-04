import React, { Component } from 'react'
import ArtCard from './ArtCard'
import axios from 'axios'

const BASE_REST_URL = "http://localhost:5000/api/"

class HomePage extends Component {
    state = {
        picture: null,
        name: '',
        artist_name: '',
        buyer_name: '',
        art_list: []
    }
    getAllArt () {
        axios.get(BASE_REST_URL + "art-list/")
        .then(res => {
            this.setState({
                art_list: res.data
            });
        })
        .catch(error => {
            console.log(error)
        });
    }
    componentDidMount (){
        this.getAllArt();
    }
    DisplayArtCards = () => {
        if (this.state.art_list && this.state.art_list.length){
            return this.state.art_list.map((art, index) =>
                <ArtCard art={art} key={index}/>)
        }
        return (<div><h2>The Art gallery is Empty!</h2></div>)
    }

    imageSelectedHandler = event => {
        this.setState({
            picture: event.target.files[0]
        })
    }
    newNameHandler = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    imageUploadHandler = () => {
        const fd = new FormData();
        fd.append("name",this.state.name)
        fd.append("artist_name",this.state.artist_name)
        fd.append("buyer_name",this.state.buyer_name)
        fd.append("picture",this.state.picture)
        axios.post(BASE_REST_URL + "art-create/", fd)
        .then(res => {
            console.log(res);
            this.getAllArt();
        })
        .catch(error => {
            console.log(error)
        });
    }
    render() {
        return (
            <div>
                <h1>Art Gallery</h1>
            <div>
                <h3>Upload new Art to Gallery</h3>
                <input id="picture" type="file" onChange={this.imageSelectedHandler}/><br /><br />
                <label htmlFor="name">Art name: </label>
                <input id="name" type="text" onChange={this.newNameHandler} /><br />
                <label htmlFor="artist_name">Artist name: </label>
                <input id="artist_name" type="text" onChange={this.newNameHandler} /><br />
                <label htmlFor="buyer_name">Buyer name: </label>
                <input id="buyer_name" type="text" onChange={this.newNameHandler} /><br />
                <button onClick={this.imageUploadHandler}>Upload!</button>
            </div>
            {this.DisplayArtCards()}
            </div>
        )
    }
}

export default HomePage;