import { useState, useEffect } from "react";

const Formulario = ()=>{
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState("");

    const resultado = ()=>{
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if(media >= 7){
            return( <p>Você foi aprovado</p> )
        }else{
            return( <p>Você foi reprovado</p> )
        }
    }

    const alteranome = (evento)=>{
        // valor antigo
        setNome(valorAnterior=>{
            console.log("Valor anterior: "+ valorAnterior);
            return evento.target.value;
        });
        // valor novo
        return evento.target.value
        console.log("Valor digitado: "+ nome);
    }

    useEffect(()=>{
        console.log("O componente iniciou");
        return ()=>{
            console.log("O componente finalizou");
        }
    }, []);

    useEffect(()=>{
        console.log("O nome mudou");
    }, [nome])

    return(
        <form>
            <input
            type="text"
            placeholder="Seu nome"
            onChange={alteranome}/>

            <input
            type="number"
            placeholder="Nota A"
            onChange={evento => setMateriaA(parseInt(evento.target.value))}/>

            <input type="number"
            placeholder="Nota B"
            onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            
            <input type="number"
            placeholder="Nota C"
            onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            <p>O aluno foi aprovado</p>
            <p>Nota A: {materiaA}</p>
            <p>Nota B: {materiaB}</p>
            <p>Nota C: {materiaC}</p>
            <p>A média é:{(materiaA + materiaB + materiaC)/3} </p>
            {resultado()}
        </form>
    )
}

export default Formulario;