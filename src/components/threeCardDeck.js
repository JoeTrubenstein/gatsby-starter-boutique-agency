import React from "react"

import pageImage from "../images/page.svg"
import blogImage from "../images/blog.svg"
import searchImage from "../images/search.svg"

import "./threeCardDeck.css"

import { CardImg, Toast, ToastBody, ToastHeader} from "reactstrap"

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
      title: "SEO",
      img: searchImage,
    },
  ]
  return (
    <div className="grid">
      {cards.map(card => (
        <div className="grid-item" key={card.id}>
          <Toast
            style={{
              width: `100%`,
              maxWidth: `none`,
            }}
          >
            <ToastHeader>
              <h3>{card.title}</h3>
            </ToastHeader>
            <ToastBody>
              <CardImg
                top
                height={200}
                width="100%"
                src={card.img}
                alt="Card image cap"
              />
            </ToastBody>
          </Toast>
        </div>
      ))}
    </div>
  )
}

export default ThreeCardDeck
