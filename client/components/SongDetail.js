import React from 'react'
import { graphql } from 'react-apollo'
import { Link } from 'react-router' 
import fetchSong from '../queries/fetchSong'
import LyricsCreate from '../components/LyricsCreate'

const SongDetail = (props) => {

    const { song } = props.data

    if(!song) { 
        return <div>Loading...</div>
    } else {
        return (
            <div>
                <Link to="/">Back</Link>
                <h3>{song.title}</h3>
                <LyricsCreate songId={props.params.id} />
            </div>
        )
    }
}

export default graphql(fetchSong, {
    options: props => ({variables: { id: props.params.id }})
})(SongDetail)