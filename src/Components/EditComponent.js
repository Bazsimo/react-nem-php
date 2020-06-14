import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newMessage = this.getMessage.value;
        const newAuthor = this.getAuthor.value;
        const data = {
            newTitle,
            newMessage,
            newAuthor
        };
        this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <div className="form-group m-3">
                        <input required type="text"
                               ref={(input) => this.getTitle = input}
                               defaultValue={this.props.post.title}
                               placeholder="Enter Post Title" className="form-control mb-2"/>
                        <textarea required rows="3"
                                  ref={(input) => this.getMessage = input}
                                  defaultValue={this.props.post.message}
                                  placeholder="Enter Post" className="form-control mb-4"/>
                        <input
                            ref={(input) => this.getAuthor = input}
                            defaultValue={this.props.post.author}
                            placeholder="Enter Author" className="form-control mb-4"/>
                        <button className="btn btn-outline-primary">Update</button>
                    </div>
                </form>
            </div>
        );
    }
}
export default connect()(EditComponent);
