import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'

const SongList = ({data: { songs }}) => {

    return (
        <div>
            <ul className="collection">
                {
                    songs ?
                    songs.map((song, index) => <li className="collection-item" key={index}>{song.title}</li>)
                    :
                    <div>{"Loading songs..."}</div>
                }
            </ul>
            <Link to="/songs/new" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
            </Link>
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
