import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { createStructuredSelector } from "reselect"

import "./App.css"

import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import CheckoutPage from "./pages/checkout/checkout.component"
import SignInAndSignUpPage from "./pages/sign-in-sign-up-page/sign-in-sign-up-page.component"
import ContactPage from "./pages/contact/contact.component"
import Search from "./components/search/search.component"

import Header from "./components/header/header.component"
import Footer from "./components/footer/footer.component"
import MobileHeader from "./components/mobile-header/mobile-header.component"
import MenuButton from "./components/menu-button/menu-button.component"

import { auth, createUserProfileDocument } from "./firebase/firebase.utils"
import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selector"

class AppMain extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        // we automatically get a snapshot when we run userRef
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        })
      } else {
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    const { currentUser } = this.props

    return (
      <div className="App-Main">
        <MenuButton />
        <Header />
        <MobileHeader />
        <Search />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route exact path="/signIn" render={() => (currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />)} />
        </Switch>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AppMain)
