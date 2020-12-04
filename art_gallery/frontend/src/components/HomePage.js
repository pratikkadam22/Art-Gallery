import React, { Component } from 'react'
import ArtCard from './ArtCard'
import axios from 'axios'
import StatusMessage from './StatusMessage'

const BASE_REST_URL = "http://localhost:5000/api/"

class HomePage extends Component {
    state = {
        picture: null,
        name: '',
        artist: '',
        buyer: '',
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
    deleteHandler = (artname) => {
        axios.delete(BASE_REST_URL + "art-delete/" + artname)
        .then(res => {
            console.log(res)
            this.getAllArt();
        })
        .catch(error => {
            console.log(error)
        });
    }
    DisplayArtCards = () => {
        if (this.state.art_list && this.state.art_list.length){
            return this.state.art_list.map((art, index) =>
                <ArtCard art={art} deleteHandler={this.deleteHandler} key={index}/>)
        }
        return (<div className="jumbotron border border-dark col-md-12"><div className="container"><h1 className="display-4">
            The Art gallery is Empty!</h1></div></div>)
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
        fd.append("artist",this.state.artist)
        fd.append("buyer",this.state.buyer)
        fd.append("picture",this.state.picture)
        axios.post(BASE_REST_URL + "art-create/", fd)
        .then(res => {
            if (typeof res.data === 'string'){
                this.setState({
                    errStatus: true
                })
            }
            else { 
                document.getElementById("picture").value = null;
                document.getElementById("name").value = "";
                document.getElementById("artist").value = "";
                document.getElementById("buyer").value = "";
                this.getAllArt(); }
        })
        .catch(error => {
            console.log(error)
        });
        this.setState({ errStatus: false })
    }

    displayStatusMessage = () => {
        if (this.state.errStatus === true) {
            return <div><StatusMessage /></div>
        }
        return (<div></div>)
    }
    render() {
        return (
            <div><div className="container"><br />
            <div className="card bg-dark text-white">
            <div className="card-body text-center"><h3><b>ART GALLERY</b></h3></div>
            </div><br />
            <div className="row">
                {this.DisplayArtCards()}
            </div>
            <div className="border border-dark rounded bg-light"><br />
                <h5>Upload new Art to Gallery <small>("Art Name" should be unique)</small></h5>
                <div className="row">
                    <div className="col pl-4">
                        <label htmlFor="picture">Browse picture:</label>
                        <input id="picture" type="file" onChange={this.imageSelectedHandler}/>
                    </div>
                    <div className="col">
                        <label htmlFor="name">Art name:</label>
                        <input id="name" type="text" onChange={this.newNameHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="artist">Artist name:</label>
                        <input id="artist" type="text" onChange={this.newNameHandler} />
                    </div>
                    <div className="col">
                        <label htmlFor="buyer">Buyer name:</label>
                        <input id="buyer" type="text" onChange={this.newNameHandler} />
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