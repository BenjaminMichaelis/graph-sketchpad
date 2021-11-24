import React, {useState} from 'react';
import logo from './logo.svg';
import Sidebar from "./Sidebar";
import './App.css';
import GraphingSurface from './GraphingSurface';
import ClickAction from './ClickAction';

function App() 
{
    const [clickAction, setClickAction] = useState(ClickAction.SELECT)
    const [color, setColor] = useState('#607d8b');

    return (
        <div className='App'>
        <Sidebar
            clickAction={clickAction}
            setClickAction={setClickAction}
            color={color}
            setColor={setColor}
        />
        <GraphingSurface
            clickAction={clickAction}
            color={color}
        />
        </div>
    );
}

export default App;
