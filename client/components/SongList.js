import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const SongList = ({data: { songs }}) => {

    return (
        <div>
            {songs ? songs.map(song => song.title) : "Loading songs"}
        </div>
    )
}

const query = gql`
    {
        songs {
            title
        }
    }
`;

export default graphql(query)(SongList);
