import { useEffect, useState } from "react";
import styles from "./ReposList.module.css"

const ReposList = ({nomeUsuario}) => {
    const [repos, setRepos] = useState([]);
    const [carregando, setCarregando] = useState(true);

    useEffect(()=> {
        setCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(resposta => resposta.json())
        .then(resJson =>{
            setTimeout(()=>{
                setCarregando(false);
                setRepos(resJson);
            }, 3000);
        })
    },[nomeUsuario]);

    return(
        <div className="container">
            {carregando ? (
                <h1>Carregando...</h1>
                ):( <ul className={styles.list}>
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
                )
            }
        </div>
    )
}

export default ReposList;