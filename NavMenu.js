import React, { Component } from 'react'

const style = {
 fontFamily: "arial",
 listStyleType: "none",
 display: "block",
 a: { textDecoration: "none" },
 wrapper: {
  height: "90vh",
  display: "grid",
  placeItems: "center",
  backgroundColor: "#eee",
  transition: "width 0.7s ease"
 }
}

const mapper = link => {
 return (
  <li
   style={style}>
   <a style={style.a} href={link.href}>
    {link.title}</a>
  </li>
 )
}

export default class NavMenu extends Component {

 render() {

  const links = [
   { title: "home", href: "https://dormshed.com" },
   { title: "about", href: "https://dormshed.com" },
   { title: "contact", href: "https://dormshed.com" }
  ]

  return (
   <div
    style={{
     ...style.wrapper,
     width: this.props.width
    }}>
    <div>
     {
      links.map(mapper)
     }
    </div>
   </div>
  )
 }
}