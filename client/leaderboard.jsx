// jsx for the leaderboard page

// leaderboard will display all users in the database based on their domo count

const helper = require('./helper.js');
const React = require('react');
const { useState, useEffect } = React;
const { createRoot } = require('react-dom/client');

const App = (props) => {
    return (
        <div>
            <h1>Leaderboard</h1>
        </div>
    );
};

// init
const init = () => {
    root = createRoot(document.getElementById('app'));
    root.render(<App />);
};

window.onload = init;