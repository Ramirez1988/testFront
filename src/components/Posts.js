import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class Descriptions extends Component {
    state = {
         Posts:[]
    }
    componentDidMount = () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/`)
            .then(res => {
                this.setState({
                    Posts:res.data
            })
        })
    
    }
    render() {
        return (
            <div className='contact-list'>
                {this.state.Posts.map(el => (
                    <div className='contact'>
                        <h1>{el.title}</h1>
                        <p>{el.body}</p>
                        <Link to={`/comments/${el.id}`}>
                        <button>Comments</button>
                        </Link>
                    </div>
                ))}
            </div>
        )
    }
}
export default Descriptions