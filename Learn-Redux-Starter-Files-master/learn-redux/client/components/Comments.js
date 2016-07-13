/**
 * Created by Ivan_Chervenkov on 7/13/2016.
 */
import React from 'react';

const Comments = React.createClass({

    renderSingleComment(comment, i) {
        return (
            <div className="comment" key={ i }>
                <p>
                    <b>{comment.user}</b>
                   &nbsp;  {comment.text}
                    <button
                        className="remove-comment"
                        onClick={ this.props.removeComment.bind(null, this.props.params.postId, i) }
                    >
                        &times;
                    </button>
                </p>
            </div>
        )

        console.log(comment);
    },

    handleSubmit(e) {
        "use strict";
        e.preventDefault();
        console.log(this.refs);
        const { postId } = this.props.params;
        const author = this.refs.author.value;
        const comment = this.refs.comment.value;
        this.props.addComment(postId, author, comment);
        this.refs.commentForm.reset();
    },

    render() {
        return(
            <div className="comments">
                { this.props.postComments.map(this.renderSingleComment) }
                <form
                    ref="commentForm"
                    className="comment-form"
                    onSubmit={ this.handleSubmit }
                >
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden/>
                </form>
            </div>
        )
    }
});

export default Comments;