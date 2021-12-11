import React, { Component } from "react";

class LyricList extends Component {
    onLike(id) {
        console.log("ID", id)
    }

    renderLyrics() {
        return this.props.lyrics.map(({ id, content }) => (
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
            </li>
        ));
    }

    render() {
        return <ul className="collection">{this.renderLyrics()}</ul>;
    }
}

export default LyricList;
