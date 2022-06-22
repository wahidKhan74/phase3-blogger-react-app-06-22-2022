import React from 'react';

function Hello(props) {
    return (
        <div>
            <h1>Hello Welcome to React Development</h1>
            <p>This is a root App.js component.</p>
            <p> Hello , {props.name}</p>
        </div>
    )
};

export default Hello;