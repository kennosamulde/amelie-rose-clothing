import React from "react"
import { Switch, Route } from "react-router-dom"
import "./App.css"
import HomePage from "./pages/homepage/homepage.component"

const JacketsPage = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Jackets Page</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/jackets" component={JacketsPage}></Route>
      </Switch>
    </div>
  )
}

export default App
