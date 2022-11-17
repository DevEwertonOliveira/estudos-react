const TemplateExpressions = () => {

    const name = "Fulano"
    const data = {
        age: 31,
        job: "programmer",
    }
    return (
        <div>
            <h1>Olá {name}</h1>
            <p>Voce atua como : {data.job}</p>
            <p>{4 + 4}</p>
        </div>
    )
}



export default TemplateExpressions