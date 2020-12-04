import React, { Component } from 'react'
import ArtCard from './ArtCard'
import axios from 'axios'
import StatusMessage from './StatusMessage'

const BASE_REST_URL = "http://localhost:5000/api/"

class HomePage extends Component {
    state = {
        picture: null,
        name: '',
        artist_name: '',
        buyer_name: '',
        art_list: [],
        errStatus: false
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
            if (typeof res.data === 'string'){
                this.setState({
                    errStatus: true
                })
                // console.log("upload", this.state)
            }
            else { this.getAllArt(); }
        })
        .catch(error => {
            console.log(error)
        });
        this.setState({ errStatus: false })
    }

    displayStatusMessage = () => {
        console.log("status", this.state)
        if (this.state.errStatus === true) {
            return <div><StatusMessage /></div>
        }
        return (<div></div>)
    }
    render() {
        return (
            <div><div className="container"><br />
            <div className="card bg-dark text-white">
            <div className="card-body text-center"><b>ART GALLERY</b></div>
            </div><br />
            <div className="row">
                {this.DisplayArtCards()}
            </div>
            <div className="border border-dark rounded bg-light"><br />
                <h5>Upload new Art to Gallery</h5>
                <div className="row">
                    <div className="col">
                        <label htmlFor="picture">Browse picture:</label>
                        <input id="picture" type="file" onChange={this.imageSelectedHandler}/>
                    </div>
                    <div className="col">
                        <label htmlFor="name">Art name:</label>
                        <input id="name" type="text" onChange={this.newNameHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="artist_name">Artist name:</label>
                        <input id="artist_name" type="text" onChange={this.newNameHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="buyer_name">Buyer name:</label>
                        <input id="buyer_name" type="text" onChange={this.newNameHandler} />
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-dark btn-lg" onClick={this.imageUploadHandler}>Upload!</button>
                    </div>
                </div><br />
                {this.displayStatusMessage()}
            </div><br />
            </div>
            <div className="navbar navbar-dark bg-dark text-center">
            <span className="navbar-brand mb-0 h1">Author: Pratik Kadam</span>
        </div>
        </div>
        )
    }
}

export default HomePage;