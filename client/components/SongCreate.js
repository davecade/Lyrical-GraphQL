import React, { Component } from 'react'
import gql from 'graphql-tag'

class SongCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    onSubmit(e) {
        e.preventDefault()
        
        console.log(this.state.title)
    }

    render() {
        return (
            <div>
                <h3>Create a New Song</h3>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <label>Song Title:</label>
                    <input 
                        onChange={event => this.setState({ title: event.target.value })}
                        value={this.state.title}
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mutation = gql`
    mutation {
        addSong(title: ) {
        id
        title
        }
    }
`

export default SongCreate;
