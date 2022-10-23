import './App.css';
import Btncomponent from './components/Uicomponents/Btncomponent';
import {useState,useEffect} from 'react';
function App() {

const [name,setName] = useState("akbar")

const Highordercomponent =(props)=><p>
                               <Btncomponent param={props.names}/>
                              </p>;

  return (
    <div className="App">
      <h1>this is app js</h1>
      <input type="text" placeholder='enter text for btn text' onChange={(e)=>setName(e.target.value)}></input>
      <Highordercomponent names={name}/>
    </div>
  );
}

export default App;
