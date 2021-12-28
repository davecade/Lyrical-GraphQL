import React, { Component } from "react";
import { graphql } from "react-apollo";
import gql from "graphql-tag";

class LyricList extends Component {
    onLike(id) {
        this.props.mutate({
            variables: { id: id }
        })
    }

    renderLyrics() {
        return this.props.lyrics.map(({ id, content, likes }) => (
            <li key={id} className="collection-item">
                {content}
                <i
                    className="material-icons"
                    style={{
                        marginLeft: "100%",
                        marginRight: "1rem",
                        cursor: "pointer",
                    }}
                    onClick={() => this.onLike(id)}
                >
                    thumb_up
                </i>
                { likes }
            </li>
        ));
    }

    render() {
        return <ul className="collection">{this.renderLyrics()}</ul>;
    }
}

const mutation = gql`
    mutation LikeLyric($id: ID) {
        likeLyric(id: $id) {
            id
            likes
        }
    }
`;

export default graphql(mutation)(LyricList);
