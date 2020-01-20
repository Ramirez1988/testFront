import React, { Component } from 'react';
import axios from "axios"

class Comments extends Component {
     
    state = {
        title: "",
        body:""
    }

     componentDidMount = () => {
         axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
             .then(res => {
                 this.setState({
                ...res.data
             })
         })
     }
     render() {        
        return (
            <div className='comments'>
                <h1>{this.state.title}</h1>
                <p>{this.state.body}</p>
                
            </div>
        )
    }
}
export default Comments