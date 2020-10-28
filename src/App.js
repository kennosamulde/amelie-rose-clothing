import React from "react"

import { connect } from "react-redux"

import Loader from "../src/pages/loader/loader.component"
import AppMain from "./AppMain"
import { setLoading } from "./redux/loader/loader.action"

class App extends React.Component {
  componentDidMount() {
    window.addEventListener("load", this.handleLoad)
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad)
  }

  handleLoad = () => {
    const { setLoading } = this.props
    setLoading()
  }

  render() {
    return (
      <div className="App">
        <AppMain />
        <Loader />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  setLoading: () => dispatch(setLoading()),
})

export default connect(null, mapDispatchToProps)(App)
