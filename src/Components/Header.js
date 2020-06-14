import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div className="card m-0 p-1 mb-2">
                <nav className="btn-group-lg d-lg-inline-flex">
                    <button className="btn btn-primary btn-group-lg m-1" >Feature1</button>
                    <button className="btn btn-primary btn-group-lg m-1" >Feature2</button>
                    <button className="btn btn-primary btn-group-lg m-1" >Feature3</button>
                </nav>
            </div>
        );
    }
}

export default Header;
