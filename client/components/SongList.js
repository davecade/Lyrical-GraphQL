import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const SongList = ({data: { songs }}) => {

    return (
        <ul className="collection">
            {
                songs ?
                songs.map((song, index) => <li className="collection-item" key={index}>{song.title}</li>)
                :
                <div>{"Loading songs..."}</div>}
        </ul>
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
