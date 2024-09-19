import { useEffect, useState } from "react";

function Estados() {

    const [nome, setNome] = useState('')
    const [idade, setIdade] = useState('')

    function mudarNome() {
        const inputNome = document.getElementById('nome').value
        setNome(inputNome)
        
    }

    function mudarIdade() {
        const inputIdade = document.getElementById('idade').value
        setIdade(inputIdade)
    }


    // useEffect(() => {alert('Olá')}, [])

    return (

        <>
            <div className="Estados">
                <h1>Digite seu nome para mudar</h1>
                <input type="text" id="nome" />
                <button onClick={mudarNome} >Mudar o nome</button>
                <br />
                <div className="divNome">{nome}</div>

                <br /><br /><br />
                <h1>Digite sua idade para mudar</h1>
                <input type="text" id="idade" />
                <button onClick={mudarIdade} >Mudar a idade</button>
                <br />
                <div className="divIdade">{idade}</div>
            </div>
        </>
    )
}

export default Estados;