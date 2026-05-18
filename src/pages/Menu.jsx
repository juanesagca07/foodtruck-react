import "../styles/menu.css";

function Menu({ volverDashboard }) {

  return (

    <div className="menu-container">

      <div className="menu-header">

        <div>

          <h1>Menú FoodTruck</h1>

          <p>
            Sistema funcionando correctamente
          </p>

        </div>

        <button onClick={volverDashboard}>

          Volver

        </button>

      </div>

      <div className="menu-grid">

        <div className="menu-card">

          <h2>Pájaro Loco</h2>

          <p>
            Hamburguesa especial
          </p>

          <strong>$15.000</strong>

          <button>
            Agregar
          </button>

        </div>

      </div>

    </div>

  );

}

export default Menu;