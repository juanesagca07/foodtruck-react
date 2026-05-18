import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Menu from "./pages/Menu";

function App() {

  const [usuarioActivo, setUsuarioActivo] = useState(null);

  const [pantalla, setPantalla] = useState("dashboard");

  const iniciarSesion = (usuario) => {

    setUsuarioActivo(usuario);

    setPantalla("dashboard");

  };

  const abrirMenu = () => {

    setPantalla("menu");

  };

  const volverDashboard = () => {

    setPantalla("dashboard");

  };

  if (!usuarioActivo) {

    return (

      <Login iniciarSesion={iniciarSesion} />

    );

  }

  if (pantalla === "dashboard") {

    return (

      <Dashboard
        usuario={usuarioActivo}
        abrirMenu={abrirMenu}
      />

    );

  }

  if (pantalla === "menu") {

    return (

      <Menu
        volverDashboard={volverDashboard}
      />

    );

  }

}

export default App;