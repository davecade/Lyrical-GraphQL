import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import query from "../queries/fetchSongs";
import gql from "graphql-tag";

const SongList = ({ data: { songs, refetch }, mutate }) => {
    const onSongDelete = (id) => {
        mutate({
            variables: { id: id },
        }).then(refetch());
    };

    return (
        <div>
            <ul className="collection">
                {songs ? (
                    songs.map((song, index) => (
                        <li className="collection-item" key={index}>
                            <Link to={`songs/${song.id}`}>{song.title}</Link>
                            <i
                                className="material-icons"
                                style={{
                                    marginLeft: "100%",
                                    marginRight: "1rem",
                                    cursor: "pointer",
                                }}
                                onClick={() => onSongDelete(song.id)}
                            >
                                delete
                            </i>
                        </li>
                    ))
                ) : (
                    <div>{"Loading songs..."}</div>
                )}
            </ul>
            <Link to="/songs/new" className="btn-floating btn-large red right">
                <i className="material-icons">add</i>
            </Link>
        </div>
    );
};

const mutation = gql`
    mutation DeleteSong($id: ID) {
        deleteSong(id: $id) {
            id
        }
    }
`;

export default graphql(mutation)(graphql(query)(SongList));
