import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PuppyImage from './PuppyImage';
import InputName from './InputName';
import DisplayName from './DisplayName';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
    <App />
    <PuppyImage />
    <InputName />
    <DisplayName />
    </div>, document.getElementById('root'));
registerServiceWorker();

