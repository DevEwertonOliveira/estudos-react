import { useState } from "react"


const ConditionalRender = () => {
    const [x] = useState(true)

    const [name, setName] = useState("Teste")

    return (
        <div>
            <h1>Isso sera exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            {!x && <p>Agora x é falso</p>} {/*false*/}
            {name === "João" ? (
                <div>
                    <p>O nome é João</p>
                </div>
            ) : (
                <div>
                    <p>Nome não encontrado</p>
                </div>
            )}

            <button onClick={() => setName("João")}>Clica aqui</button>
        </div>
    )
}

export default ConditionalRender