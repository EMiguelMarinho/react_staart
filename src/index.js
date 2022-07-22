import ReactDom from 'react-dom'; // renderiza o react na web

import './styles/global.css'

import { App} from './App'

ReactDom.render(
    <App />,document.getElementById('root')
);
