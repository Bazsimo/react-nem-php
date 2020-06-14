import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    render() {
        return (
            <React.Fragment>
                <tr className="d-flex">
                    <th className="col-5">{this.props.post.title}</th>
                    <td className="col-4">{this.props.post.author}</td>
                    <td className="col-3">
                        <button className="btn btn-outline-info btn-block"
                            onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>
                            <i className="fa fa-edit"> Edit</i>
                        </button>
                    </td>
                </tr>
                <tr className="d-flex">
                    <td className="col-9">{this.props.post.message}</td>
                    <td className="col-3">
                        <button className="btn btn-outline-danger btn-block"
                            onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
                            <i className="fa fa-trash"> Delete</i>
                        </button>
                    </td>
                </tr>
            </React.Fragment>
        );
    }
}

export default connect()(Post);
