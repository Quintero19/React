import { Outlet,Link } from "react-router-dom";

const Layout = ()=>{
    return <div>
        <nav>
            <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/SobreNosotros">Sobre Nosotros</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/Clientes">Clientes</Link></li>
            </ul>
        </nav>
        <hr />
        <Outlet />
    </div>
}

export default Layout;