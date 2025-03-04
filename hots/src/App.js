import logo from './logo.svg';
import NavBar from './componenet/navBar';
import Title from './componenet/Title';
import Input from './componenet/Input';
import React,{useState,useEffect} from "react";
import Button from './componenet/Button';
import Todos from './componenet/Todos';
import { saveToLocalstorage,getFromLocalstorage } from './componenet/utils/storage';
import './App.css';

function App() {
  const [Input_Value,set_Input_Value]=useState(" ");
  const [todos,set_Todos]=useState(()=>getFromLocalstorage("todos")||[]);
  useEffect(()=>{
    saveToLocalstorage("todos",todos)
    console.log("todos",todos)
  },[todos])

  const Handel_Add=()=>{
    set_Todos ([...todos,Input_Value]);
}
  return (
    <div className="App">
      <NavBar/>
      <Title text={"This is React Todo App"}/>
      <Input value={Input_Value} onChange={set_Input_Value}/>
      <Button text={"add to do"} onClick={Handel_Add}/>
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
