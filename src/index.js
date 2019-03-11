import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/common/Header';
import List from './Components/list/List';
import * as serviceWorker from './serviceWorker';

const App = () => {
    const title = 'React Classes';
    return (
        <div className="container">
            <h1>{title}</h1>
            <Header />
            < List />
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById('root'));

serviceWorker.unregister();
