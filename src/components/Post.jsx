import React, { Component } from "react";

class Post extends Component {
    state = {}

    render() {
        const {
            content,
            imageUrl
        } = this.props;
        return(
            <div className="card mb-5">
                <div className="card-body card-body-border">
                    <p className="card-text">{content}</p>
                </div>
                {imageUrl &&
                    <div className="card-body card-body-border">
                        <img src={imageUrl} className="card-img-top" height="250" alt="Card"/>
                    </div>
                }
                <div className="card-footer p-1">
                    <input ref={ref => this.commentTextRef = ref}  type="text" className="form-control nooutline" placeholder="Escribe un Comentario" />
                </div>
            </div>
        )
    }
}

export default Post;