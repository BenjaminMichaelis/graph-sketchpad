import React, {useState} from 'react';
import logo from './logo.svg';
import Sidebar from "./Sidebar";
import './App.css';
import GraphingSurface from './GraphingSurface';
import ClickAction from './ClickAction';

function App() 
{
    const [clickAction, setClickAction] = useState(ClickAction.SELECT)

    return (
        <div className='App'>
        <Sidebar
            clickAction={clickAction}
            setClickAction={setClickAction}
        />
        <GraphingSurface
            clickAction={clickAction}
        />
        </div>
    );
}

export default App;
