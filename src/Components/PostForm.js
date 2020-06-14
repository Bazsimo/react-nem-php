import React, {Component} from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message =  this.getMessage.value;
        const author =  this.getAuthor.value;
        const data = {
            id: new Date(),
            title,
            message,
            author,
            editing:false
        };
        this.props.dispatch({
            type:'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
        this.getAuthor.value = '';
    };

    render() {
        return (
            <div className="card p-3 bg-light mb-2">
                <h2 className="h2 text-muted">Create Post</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input required type="text"
                            ref={(input) => this.getTitle = input}
                            placeholder="Enter Post Title" className="form-control mb-2"/>
                        <textarea required rows="3"
                            ref={(input) => this.getMessage = input}
                            placeholder="Enter Post" className="form-control mb-4"/>
                        <input
                        ref={(input) => this.getAuthor = input}
                        placeholder="Enter Author" className="form-control mb-4"/>
                        <button className="btn btn-outline-primary">Enter</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);
