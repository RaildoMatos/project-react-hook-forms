import React from "react";
import CadastroUsuario from "./cadastroUsuario/CadastroUsuario";
import "./App.css";

function App() {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <div className="card">
        <CadastroUsuario onSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default App;
