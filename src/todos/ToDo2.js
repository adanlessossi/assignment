import React, { Component } from 'react';

class ToDo2 extends Component {
    render() {
        return (
            <div className="todo">
                <h2>TODO 2: Display details of a single listing</h2>
                <p>
                    Things to be displayed:
                </p>
                <ul>
                    <li>listing picture</li>
                    <li>listing title</li>
                    <li>listing description</li>
                </ul>
                <p>
                    Add some minimal styling (design and layout is up to you)
                </p>
            </div>
        )
    }
}

export default ToDo2;
