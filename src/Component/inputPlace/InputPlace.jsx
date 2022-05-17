import React,{useState} from 'react';
import "./InputPlace.css";
import { useNavigate } from 'react-router-dom'


function InputPlace({placeHolder}) {
  const history = useNavigate();
  const [input, setinput] = useState("");

  function handleChange(event){
    setinput(event.target.value);
  }

  function handleSend(){
    setinput("");
    history(`/book/${input}`);
  }

  return (
    <div className='container'>
      <input onChange={handleChange} type="text" placeholder={placeHolder} />
      {/* <button onClick={handleSend}>SEND</button> */}
    </div>
  )
}

export default InputPlace