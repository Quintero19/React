import { useReducer } from "react";

function reducer(state,action){
  switch (action.type) {
    case 'incremeted_age':{
      return{
        name:state.name,
        age: state.age + 1
      };
    } 
    case 'changed_name':{
      return{
        name: action.nextName,
        age: state.age
      };
    }
  }
  throw Error('Unknown action: ' + action.type);
}

const initialState = {name:"Messi",age:37};

export default function Form(){
  const [state, dispatch] = useReducer(reducer,initialState);

  function handleButtonClick(){
    dispatch({type:'incremeted_age'});
  }
  function handleInputChange(e){
    dispatch({type:'changed_name', nextName:e.target.value});
  }


  return (
    <>
      <input 
        value={state.name}
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>
        Incrementar Edad
      </button>
      <p>hola, {state.name}.tú tienes {state.age}.</p>
    </>
  )
}