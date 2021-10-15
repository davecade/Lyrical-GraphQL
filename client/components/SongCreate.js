import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link, hashHistory } from 'react-router'

class SongCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    onSubmit(e) {
        e.preventDefault()
        
        this.props.mutate({
            variables: {
                title: this.state.title
            }
        }).then(() => hashHistory.push('/'))
    }

    render() {
        return (
            <div>
                <Link to="/">back</Link>
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
    mutation($title: String) {
        addSong(title: $title) {
        id
        title
        }
    }
`

export default graphql(mutation)(SongCreate);
