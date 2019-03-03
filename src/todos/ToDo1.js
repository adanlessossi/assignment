import React, { Component } from 'react';

class ToDo1 extends Component {
    render() {
        return (
            <div className="todo">
                <h2>TODO 1: Navigation to property details</h2>
                <p>
                    User should be able to navigate to the details page by clicking on the property.
                    Component <b>'DetailPage'</b> already exists in <b>pages</b> folder.
                </p>
            </div>
        )
    }
}

export default ToDo1;
