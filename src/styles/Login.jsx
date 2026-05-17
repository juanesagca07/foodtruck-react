import "../styles/login.css";

function Login() {

    return (

        <div className="login-container">

            <div className="login-card">

                <h1>FoodTruck</h1>

                <p>Sistema de gestión para comidas rápidas</p>

                <input 
                    type="text" 
                    placeholder="Usuario"
                />

                <input 
                    type="password" 
                    placeholder="Contraseña"
                />

                <button>
                    Ingresar
                </button>

            </div>

        </div>

    )

}

export default Login;