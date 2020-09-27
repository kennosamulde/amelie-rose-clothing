import React from "react"
import "./sign-in.styles.scss"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import { auth, signInWithGoogle } from "../../firebase/firebase.utils"
import Google from "../../assets/google.png"

class SignIn extends React.Component {
  constructor() {
    super()

    this.state = {
      email: "",
      password: "",
      error: "",
    }
  }

  handleSubmit = async (event) => {
    event.preventDefault()
    const { email, password } = this.state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      this.setState({ email: "", password: "" })
    } catch (err) {
      this.setState({ error: err.message })
      console.log(this.state.error)
    }
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="sign-in">
        {this.state.error && (
          <div className="error">
            <h5>{this.state.error}</h5>
          </div>
        )}

        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput handleChange={this.handleChange} name="email" type="email" label="Email" value={this.state.email} required />
          <FormInput handleChange={this.handleChange} name="password" type="password" label="Password" value={this.state.password} required />

          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
              <img alt="google" src={Google} /> Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
