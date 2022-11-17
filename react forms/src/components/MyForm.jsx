import { useState } from 'react'
import './MyForm.css'

const MyForm = ({ user }) => {
    // controlled inputs
    // 3 - gerenciamento de dados

    const [name, setName] = useState(user ? user.name : '')
    const [email, setEmail] = useState(user ? user.email : '')
    const [bio, setBio] = useState(user ? user.bio : '')
    const [role, setRole] = useState(user ? user.role : '')

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Enviando o formulario")
        console.log(name, email, bio, role)

        //validação
        //envio

        // limpar formulário
        setName("")
        setEmail("")
        setBio("")
    }


    return (
        <div>
            {/* Envio de form */}
            {/* Criação de form */}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" >Nome:</label>
                    <input type="text"
                        name="name"
                        onChange={handleName}
                        placeholder="Digite o seu nome"
                        value={name}
                    />
                </div>
                {/* Label envolvendo o input */}
                <label>
                    {/* Simplificação de manipulação de state */}
                    <span>E-mail</span>
                    <input type="email" name="email" placeholder="Digite o seu email"
                        onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                {/* textarea */}
                <label>Bio:</label>
                <textarea name="bio"
                    placeholder="Descrição do usuário"
                    onChange={(e) => setBio(e.target.value)} value={bio}
                ></textarea>
                <label>Função do sistema</label>
                <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador </option>
                </select>
                <input type="submit" value="Enviar" />
                {/* Select */}

            </form>
        </div>
    )
}

export default MyForm