// // import { useState } from 'react'
// // import './App.css'


// // function App(){
// //   const [counter, setCounter] = useState(0);
// //   const [name, setName] = useState(['hello, world'])

// //   return(
// //     <div className='App'>
// //     <h1>{counter}</h1>
// //     <h1>{name}</h1>
// //     <button onClick={()=>setCounter(counter + 1)}>+</button>
// //   </div>
// //   )
  
// // }


// // export default App


// import { useState, useEffect } from 'react'


// function CreateConnection(serverUrl, roomId) {
//   return{
//     connect(){
//       console.log('Conectado a la sala "' + roomId + '" en ' + serverUrl + ' ...');
//     },
//     disconnect(){
//       console.log('Desconectado de la sala "' + roomId + '"' + serverUrl);
//     }
//   };
// }

// function ChatRoom({roomId}) {
//   const [serverUrl, setServerUrl] = useState('https://faketaxi.com');
//   useEffect(()=> {
//     const connection = CreateConnection(serverUrl, roomId);
//     connection.connect();
//     return ()=>{
//       connection.disconnect(); 
//     }  
//   },[roomId, serverUrl]);

//   return(
//     <>
//       <label>
//         URL del servidor:{''}
//         <input
//         value={serverUrl}
//         onChange={e => serverUrl(e.target.value)}
//         />
//       </label>
//       <h1>!Bienvenido a la sala {roomId}</h1>
//     </>
//   );
// }
// export default function App(){
//   const [roomId, setRoomId] = useState('general');
//   const [show, setShow] = useState(false);
//   return(
//     <>
//     <label>
//       Elija un sitio de chat:{''}
//       <select>
//         value={roomId}
//         onChange={e => setRoomId(e.target.value)}
//         <option value="general">General</option>
//         <option value="viaje">viaje</option>
//         <option value="música">Música</option>
//       </select>
//     </label>
//     <button onClick={() => setShow(!show) }>
//       {show? 'Ocultar chat' : 'Mostrar chat'}
//     </button>
//     {show && <hr />}
//     {show && <ChatRoom roomId={roomId} />}
//     </>
//   );  
// }

// import React from 'react';
// import'./App.css';

// const themes = {
//   light:{
//     foreground:'#000000',
//     background:'#eeeeee'
//   },
//   dark:{
//     foreground:'#ffffff',
//     background:'#222222'
//   }
// }

// const ThemeContext = React.createContext(themes.light)

// export default function App(){
//   return (
//     <ThemeContext.Provider value={themes.dark}>
//       <Toolbar/>
//     </ThemeContext.Provider>
//   )
// }

// function Toolbar(props){ 
//   return (
//     <div>
//       <ThemeButton/>
//     </div>
//   )
// }

// function ThemeButton(){
//   const themeContext = React.useContext(ThemeContext)
//   return (
//     <button style={{backgroundColor:themeContext.background, color:themeContext.foreground}}>
//       I sm Styled by theme context</button>
//   )
// }


//use ref
// import React, {useRef} from 'react'
// import './App.css'

// function App(){
//   const inputRef = useRef()
//   const handleClick = () => {
//     alert (inputRef.current.value)
//   }
//   return(
//     <div>
//       <h1>Hello Youtube</h1>
//       <input type="text" ref={inputRef}/>
//       <button onClick={handleClick}>Enviar</button>
//     </div>
//   )
// }

// export default App 