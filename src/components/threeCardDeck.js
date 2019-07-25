import React from "react"
import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap"

const ThreeCardDeck = props => {
  const cards = [
    {
      id: 1,
      title: "Landing Pages",
      subtitle: "Hey",
      text: "Heyyy",
      img: "https://source.unsplash.com/random/100x75",
    },
    {
      id: 2,
      title: "Landing Pages",
      subtitle: "Hey",
      text: "Heyyy",
      img: "https://source.unsplash.com/random/100x75",
    },
    {
      id: 3,
      title: "Landing Pages",
      subtitle: "Hey",
      text: "Heyyy",
      img: "https://source.unsplash.com/random/100x75",
    },
  ]
  return (
    <CardDeck>
      {cards.map(card => (
        <Card key={card.id}>
          <CardImg
            top
            width="100%"
            src={card.img}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>{card.title}</CardTitle>
            <CardSubtitle>{card.subtitle}</CardSubtitle>
            <CardText>{card.text}</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      ))}
    </CardDeck>
  )
}

export default ThreeCardDeck
