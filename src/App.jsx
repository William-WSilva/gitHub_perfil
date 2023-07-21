import { useState } from "react";
import Perfil from "./components/Perfil/Perfil";
import ReposList from "./components/ReposList/ReposList";

function App() {
  const [nomeUsuario, setNomeUsuario] = useState("");

  return (
    <>
      <select type="text" onBlur={(e)=> setNomeUsuario(e.target.value)}>
      <option value="William-WSilva">William-WSilva</option>
      <option value="github-readme-stats">github-readme-stats</option>
      <option value="app-ideas">app-ideas</option>
      </select>
      {nomeUsuario.length > 4 &&(
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}
    </>
  )
}

export default App
