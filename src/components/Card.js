const Card = ({ card }) => {
    return (
        <div className="card">
            <h3>{card.title}</h3>
            <p>{card.content}</p>
        </div>
    )
}

export default Card
