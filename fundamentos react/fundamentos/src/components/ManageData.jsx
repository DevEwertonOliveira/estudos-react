import { useState } from "react"



const ManageData = () => {
    const [number, setNumber] = useState(10)
    console.log
    return (
        <div>
            <p>
                Valor: {number}
            </p>
            <button onClick={() => setNumber(25)}>Mudar o state:</button>
        </div>
    )
}

export default ManageData