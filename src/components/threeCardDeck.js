import React from "react"

import pageImage from "../images/page.svg"
import blogImage from "../images/blog.svg"
import searchImage from "../images/search.svg"

import {
  Card,
  CardImg,
  CardTitle,
  CardDeck,
  CardBody,
} from "reactstrap"

const ThreeCardDeck = props => {
  const cards = [
    {
      id: 1,
      title: "Landing Pages",
      img: pageImage,
    },
    {
      id: 2,
      title: "Blog Posts",
      img: blogImage,
    },
    {
      id: 3,
      title: "SEO and Analytics",
      img: searchImage,
    },
  ]
  return (
    <CardDeck>
      {cards.map(card => (
        <Card
          key={card.id}
          style={{
            padding: 10,
          }}
        >
          <CardImg
            top
            height={200}
            width="100%"
            src={card.img}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{
              fontFamily :`Raleway`,
              fontWeight:800,
              fontSize:22
            }}>{card.title}</CardTitle>
          </CardBody>
        </Card>
      ))}
    </CardDeck>
  )
}

export default ThreeCardDeck
