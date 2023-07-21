import { useState } from "react";
import styles from "./Perfil.module.css";

const options = [
  { value: "", label: "Busque ou Selecione Github" },
  { value: "William-WSilva", label: "William-WSilva" },
  { value: "bootstrap", label: "bootstrap" },
  { value: "app-ideas", label: "app-ideas" },
];

const Perfil = ({ nomeUsuario, setNomeUsuario }) => {
  const [buscar, setBuscar] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleBuscar = () => {
    setNomeUsuario(inputValue);
    setBuscar(true);

    // Verifica se o nome digitado já está nas opções do select
    if (!options.some((option) => option.value === inputValue)) {
      // Se não estiver, adiciona o novo nome como mais uma opção
      setNomeUsuario(inputValue);

      // Atualiza a opção selecionada
      setSelectedOption(inputValue);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    setNomeUsuario(event.target.value);
  };

  return (
    <header className={styles.header}>
      <a target="_blank" href={`https://github.com/${nomeUsuario}`}>
        <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
      </a>
      <h1 className={styles.name}>{nomeUsuario}</h1>
      <div className={styles.divFind}>
        <input
          className={styles.inputFind}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleBuscar} className={styles.buttonFind}>
          Pesquisar
        </button>
      </div>
      <select
        className={styles.selectRepos}
        value={selectedOption} // Define o valor selecionado com base no estado selectedOption
        onChange={handleSelectChange} // Define o callback para atualizar o estado selectedOption quando a seleção muda
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </header>
  );
};

export default Perfil;
