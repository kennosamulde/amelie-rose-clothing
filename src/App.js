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
import Loader from "./pages/loader/loader.component"

import Header from "./components/header/header.component"
import Footer from "./components/footer/footer.component"
import MobileHeader from "./components/mobile-header/mobile-header.component"
import MenuButton from "./components/menu-button/menu-button.component"

import { auth, createUserProfileDocument, firestore, convertCollectionsSnapshotToMap } from "./firebase/firebase.utils"
import { setCurrentUser } from "./redux/user/user.actions"
import { selectCurrentUser } from "./redux/user/user.selector"
import { selectHeaderIsMenuOpen, selectHeaderIsSearchOpen } from "./redux/header/header.selector"

import { updateCollections, toggleIsLoading } from "./redux/shop/shop.actions"
import { selectLoading } from "./redux/shop/shop.selector"

class App extends React.Component {
  unsubscribeFromAuth = null
  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { setCurrentUser, toggleIsLoading } = this.props

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

    // get shop
    const { updateCollections } = this.props
    const collectionRef = firestore.collection("collections")

    collectionRef.get().then((snapShot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapShot)
      updateCollections(collectionsMap)
      toggleIsLoading()
    })

    // fetch("https://firestore.googleapis.com/v1/projects/crwn-db-dca62/databases/(default)/documents/collections")
    //   .then((response) => response.json())
    //   .then((collections) => updateCollections(collections))

    // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapShot) => {
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapShot)
    //   updateCollections(collectionsMap)
    //   toggleIsLoading()
    // })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
    this.unsubscribeFromSnapshot()
  }

  render() {
    const { isLoading, currentUser } = this.props

    return (
      <div className="App">
        <Loader />
        <MenuButton />
        <Header isLoading={isLoading} />
        <MobileHeader />
        <Search />
        <Switch>
          <Route exact path="/" component={HomePage} isLoading={isLoading} />
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
  isMenuOpen: selectHeaderIsMenuOpen,
  isSearchOpen: selectHeaderIsSearchOpen,
  isLoading: selectLoading,
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  updateCollections: (collectionsMap) => dispatch(updateCollections(collectionsMap)),
  toggleIsLoading: () => dispatch(toggleIsLoading()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
