import React from 'react';
import '../index.css';

const Jumbotron = () => {
    return (
        <div className="jumbotron jumbotron-responsive">
            <div className="page-header">
                <h1>Employee Directory</h1>
                <p>Click headers to sort by heading or use search bar</p>
                <span className="border-bottom border-danger"></span>
            </div>
        </div>
    );
}
export default Jumbotron;