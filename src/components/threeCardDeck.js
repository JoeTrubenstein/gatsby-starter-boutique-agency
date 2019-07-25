import React from "react"

import pageImage from "../images/page.svg"
import blogImage from "../images/blog.svg"
import searchImage from "../images/search.svg"

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
      img: pageImage,
    },
    {
      id: 2,
      title: "Landing Pages",
      subtitle: "Hey",
      text: "Heyyy",
      img: blogImage,
    },
    {
      id: 3,
      title: "Landing Pages",
      subtitle: "Hey",
      text: "Heyyy",
      img: searchImage,
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
