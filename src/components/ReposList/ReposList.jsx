import { useEffect, useState } from "react";
import styles from "./ReposList.module.css"

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then((resposta) => {
                if (!resposta.ok) {
                    throw new Error('Falha na requisição');
                }
                return resposta.json();
            })
            .then((resJson) => {
                setRepos(resJson);
            })
            .catch((error) => {
                console.error(error);
                
            });
    }, [nomeUsuario]);
    
    return(
        <div className="container">
            <h2>Buscar Repositorio...</h2>
            <ul className={styles.list}>
                {repos.map(({id, name, language, html_url})=>(
                    <li className={styles.listItem} key={id}>
                        <div className={styles.ItemName}>
                            <b>Nome:</b>{name}<br/>
                        </div>
                        <div className={styles.ItemLanguage}>
                            <b>Linguagem:</b> {language}<br/>
                        </div>
                        <a className={styles.listItemLink} target="_blank" href={html_url}>Visitar GitHub</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ReposList;