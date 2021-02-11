import React from "react"
import { Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import "./styles.css"
import 'remixicon/fonts/remixicon.css'



function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/" >
          <Photos />
        </Route>

        <Route path="/cart" >
          <Cart />
        </Route>
      </Switch>

    </div>
  )
}

export default App