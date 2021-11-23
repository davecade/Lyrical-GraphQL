import React, { Component } from 'react';
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'


class LyricsCreate extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: ''
        }
    }

    onSubmit(e){
        e.preventDefault();

        this.props.mutate({
            variable: {
                content: this.state.content,
                songId: this.props.songId
            }
        })


    }

    
    render() {

        return (
            <div>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <label>Add a Lyric</label>
                    <input
                        onChange={event => this.setState({ content: event.target.value })}
                        value={this.state.content}
                        type="text"
                    />
                </form>
            </div>
        )
    }
}

const mutation = gql`
    mutation AddLyricToSong($content: String, $songId: ID){
        addLyricToSong(content: $content, songId: $songId) {
            id
            lyrics {
                content
            }
        }
    }
`

export default graphql(mutation)(LyricsCreate)
