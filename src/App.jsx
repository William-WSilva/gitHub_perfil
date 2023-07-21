import { useState } from "react";
import Perfil from "./components/Perfil/Perfil";
import ReposList from "./components/ReposList/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
        <>
          <Perfil
          nomeUsuario={nomeUsuario}
          setNomeUsuario={setNomeUsuario} /> {/* Passando a função setNomeUsuario como prop */}
          <ReposList nomeUsuario={nomeUsuario} />
        </>
    </>
  )
}

export default App;
