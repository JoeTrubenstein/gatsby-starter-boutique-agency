---
layout: post
title: Behold, Markdown
path: behold-markdown-nehold
image: https://source.unsplash.com/random
author: Joe Trubenstein
date: 2019-07-30T07:03:47.149Z
alt: alt text
---

A styling test.

---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---

## Media

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.

### Image

![Test Image](../images/gatsby-astronaut.png)

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.

---

### Ordered List

1. List Item 1
2. List Item 2
   1. Nested list item A
   2. Nested list item B
3. List Item 3

### Unordered List

- List Item 1
- List Item 2
  - Nested list item A
  - Nested list item B
- List Item 3

---

## Table

| Table Header 1 | Table Header 2 | Table Header 3 |
| :------------: | :------------: | :------------: |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |
| Division 1     | Division 2     | Division 3     |

---


### Code

behold prism


```css
#container {
    float: left;
    margin: 0 -240px 0 0;
    width: 100%;
}
```

```python
def hey_man():
  while true:
  print("whats up")

```

```js
{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },

```