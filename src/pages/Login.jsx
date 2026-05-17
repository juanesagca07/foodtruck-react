import "../styles/login.css";
import logo from "../assets/logo.png";

function Login() {

    return (

        <div className="login-container">

            <div className="login-card">

                <img 
                    src={logo} 
                    alt="Logo FoodTruck"
                    className="logo"
                />

                <h1>FOODTRUCK</h1>

                <p>
                    Sistema de gestión para comidas rápidas
                </p>

                <input 
                    type="text" 
                    placeholder="Usuario"
                />

                <input 
                    type="password" 
                    placeholder="Contraseña"
                />

                <select>

                    <option>
                        Administrador
                    </option>

                    <option>
                        Cajero
                    </option>

                    <option>
                        Cocina
                    </option>

                </select>

                <button>
                    Ingresar al sistema
                </button>

            </div>

        </div>

    )

}

export default Login;