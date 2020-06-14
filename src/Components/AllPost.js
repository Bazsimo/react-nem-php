import React, { Component } from 'react';

import { connect } from 'react-redux';
import Post from "./Post";
import EditComponent from './EditComponent';

class AllPost extends Component {
    render() {
        return (
            <div className="card p-3">
                <h3 className="h3 text-muted">All Posts</h3>
                <table className="table table-bordered table-sm">
                    <thead>
                    <tr className="d-flex">
                        <th className="col-5">Title</th>
                        <th className="col-4">Author</th>
                        <th className="col-3"/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.posts.map((post) => (
                        <div key={post.id}>
                            {post.editing ? <EditComponent post={post} key={post.id} /> :
                                <Post key={post.id} post={post} />}
                        </div>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state
    }
};

export default connect(mapStateToProps)(AllPost);
