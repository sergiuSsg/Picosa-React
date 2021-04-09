import React from "react"
import {Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"
import Favorites from "./pages/Favorites";
import Footer from "./components/Footer"
import "./styles.css"
import 'remixicon/fonts/remixicon.css'

function App() {    
    return (
        <div className="page-container">
            <div className="content-wrap">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Photos/>
                    </Route>
                    <Route exact path="/cart">
                        <Cart/>
                    </Route>
                    <Route exact path="/favorites">
                        <Favorites/>
                    </Route>
                </Switch>
            </div>
            <Footer/>
        </div>
    )
}

export default App
