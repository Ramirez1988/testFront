import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {
        users:[]
    }
    componentDidMount = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                this.setState({
                users:res.data
            })
        })
     }

    render() {
        return (
            <div className='contact-list'>
                {this.state.users.map(el => (
                    <div className='contact'>
                        <Link to ={`/posts/${el.id}`}>
                        <div className='user'>{el.name[0]}</div>
                        </Link>
                    <h1>{el.name}</h1>
                    <h2>{el.username}</h2>
                    </div>
                    ))}
            </div>
        )
    }
}
export default Home