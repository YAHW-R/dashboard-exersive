type cardData = {
    cardTitle: string,
    cardAmount: number,
    cardDescription?: string
}

const Card = ({ cardTitle, cardAmount, cardDescription = '' }: cardData) => {
    return (
        <div className="card">
            <span className="card-title">{cardTitle}</span>
            <span className="card-principal-text">$ {cardAmount}</span>
            <p className="card-description">{cardDescription}</p>
        </div>
    )
}

export default Card