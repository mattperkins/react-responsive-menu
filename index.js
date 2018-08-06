import React, { Component } from 'react'
import { render } from 'react-dom'
import NavMenu from './NavMenu'

class App extends Component {

 state = {
  menu: false,
  width: 0
 }

 handleMenu = () => {
  this.setState({
   menu: !this.state.menu,
   width: this.state.width ? 0 : "100%"
  })
 }

 render() {
  return (
   <div>
    <p
     style={{
      padding: 0, margin: 0,
      position: 'absolute',
      right: 20, top: 10,
      fontSize: 12, cursor: "pointer",
      zIndex: 1000
     }}
     onClick={this.handleMenu} >
     {this.state.menu ? "CLOSE" : "MENU"}
    </p>
    {this.state.menu && <NavMenu
     width={this.state.width} />}
   </div>
  )
 }
}

render(<App />, document.getElementById('root'))
