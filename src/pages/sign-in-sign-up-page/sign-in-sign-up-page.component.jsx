import React, { useEffect } from "react"
import "./sign-in-sign-up-page.styles.scss"
import SignIn from "../../components/sign-in/sign-in.component"
import SignUp from "../../components/sign-up/sign-up.component"

const SignInAndSignUpPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  )
}

export default SignInAndSignUpPage
