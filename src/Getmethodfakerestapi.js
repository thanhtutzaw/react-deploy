import axios from 'axios'
import React, { Component } from 'react'
import {Button} from '@material-ui/core'
 
class Getmethodfakerestapi extends Component {
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            console.log(response)

        })

        .catch( (error) => {
            console.log(error)

        })
    }
    render() {
        return (
            <div>
                <h1>12. get method fake rest api with axios</h1>
                lists of fake api<Button variant="contained" color="secondary">Toggle</Button>
                <hr />
            </div>
        )
    }
}

export default Getmethodfakerestapi
