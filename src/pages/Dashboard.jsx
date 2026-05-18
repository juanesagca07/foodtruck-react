import "../styles/dashboard.css";

function Dashboard({ usuario, abrirMenu }) {

  return (

    <main className="dashboard-container">

      <header className="dashboard-header">

        <div>

          <h1>FoodTruck Dashboard</h1>

          <p>
            Bienvenido:
            {" "}
            {usuario.usuario}
          </p>

          <span>
            Rol:
            {" "}
            {usuario.rol}
          </span>

        </div>

      </header>

      <section className="dashboard-grid">

        <div
          className="dashboard-card"
          onClick={abrirMenu}
        >

          <h2>Tomar Pedido</h2>

          <p>
            Abrir menú del sistema
          </p>

        </div>

        <div className="dashboard-card">

          <h2>Pedidos</h2>

          <p>
            Ver pedidos activos
          </p>

        </div>

        <div className="dashboard-card">

          <h2>Ventas</h2>

          <p>
            Consultar ventas del día
          </p>

        </div>

      </section>

    </main>

  );

}

export default Dashboard;