import './App.css'
import './index.css'

const App=()=>{
  return (
    <div className="App">
      <h1>Hello, World!</h1>
    </div>
  )
}
export default App

// function AboutPage() {
//   return(
//     <>
//     <h1>Acerca </h1>
//     <p>Hola.<br/>¿como vas?</p>
//     </>
//   );
// }

// export default function App() {
//   return(
//     <AboutPage/>
//   );
// }


// const user = {
//   name:'Chimuelo',
//   imageUrl:'https://www.latercera.com/resizer/medNy2o4WbOWxhsL7VAuttAyF-Y=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/QUL7MFSWRZABTLRK5RBZHHQ5ZM.jpg',
//   imageSize:90,
// };

// export default function Profile(){
//   return(
//     <>
//     <h1>{user.name}</h1>
//     <img
//     className="Avatar" 
//     src={user.imageUrl} 
//     alt={'Foto de' + user.name}
//     style={{
//       width: user.imageSize,
//       height: user.imageSize,
//       borderRadius: '50%',
//     }}
//     />
//     </>
//   );
// }


// function Avatar() {
//   return(
//     <img 
//     className='Avatar'
//     src="https://www.primecomics.com.co/images/feature_variant/3/Chimuelo.jpg" 
//     alt="Lin Lanying" 
//     width={1000}
//     height={1000}
//     />
//   );
// }

// export default function Profile(){
//   return (
//       <Avatar />
//   );
// }


// const App =() =>  <Hello title="Hola pepito"/>;

// export default App;

// function Tarjeta(props) {
//   return(
//     <div className="tarjeta">
//       <h2>{props.nombre}</h2>
//       <p>{props.descripcion}</p>
//     </div>
//   );
// }

// Tarjeta.defaultProps={
//   titulo:'titulo por defecto',
//   descripcion:'descripcion por defecto',
// };

// function App() {
//   return (
//     <div>
//       <Tarjeta />
//       <Tarjeta titilo="Titulo personalizado" descripcion=" Descripcion Personalizada"/>
//     </div>
//   );
// }

// export default App

//funcion children
// function AlertaButton({message,children}) {
//   return(
//     <button onClick={() => alert(message)}>
//       {children}
//     </button>
//   );
// }

// export default function Toolbar() {
//   return (
//     <div>
//       <AlertaButton message="¡Reproduciendo!">
//         Reproducir pelicula
//       </AlertaButton>
//       <AlertaButton message="¡subiendo!">
//         subir imagen
//       </AlertaButton>
//     </div>
//   )
// }

// import './App.css'
// import './index.css'
// import Hello from './Hello.jsx';
// import {useState} from 'react'

// function MyButton() {
//   const [count, setCount] = useState(0);
//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Clicked {count} times
//     </button>
//   );
// }
// export default function MyApp() {
//   return(
//     <div>
//       <h1>Contador</h1>
//       <MyButton />
//     </div>
//   )
// }


// import './App.css'
// import './index.css'
// import Hello from './Hello.jsx';
// import {useState} from 'react'

// function MyButton() {
//   const [count, setCount] = useState(0);
//   return (
//     <button onClick={() => setCount(count + 1)}>
//       Clicked {count} times
//     </button>
//   );
// }
// export default function MyApp() {
//   return(
//     <div>
//       <h1>Contador</h1>
//       <MyButton />
//     </div>
//   )
// }
