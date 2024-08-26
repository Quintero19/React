import { useContext } from "react";
import { MiContexto } from "./Micontexto";

function MiComponente(){
    const {texto, setTexto} = useContext(MiContexto);
    return (
        <div>
            <h1>{texto}</h1>
            <button onClick={()=> setTexto('Hola Mundo!')}>
                Clikme 
            </button>
        </div>
    );
}
export default MiComponente;