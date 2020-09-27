import React from "react"
import emailjs from "emailjs-com"
import "./contact.styles.scss"
import FormInput from "../../components/form-input/form-input.component"
import CustomButton from "../../components/custom-button/custom-button.component"

class ContactPage extends React.Component {
  constructor() {
    super()

    this.state = {
      name: "",
      email: "",
      number: "",
      message: "",
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm("service_35uavmi", "template_p9m7o99", e.target, "user_g2L6O7OO2Tt85irzYss8z").then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  render() {
    const { name, email, number, message } = this.state

    return (
      <div className="contact">
        <h2 className="title">Get in touch</h2>
        <span>We'd love to hear from you, Say Hi</span>
        <form className="contact-form" onSubmit={this.handleSubmit}>
          <FormInput type="text" name="name" value={name} onChange={this.handleChange} label="Name" required />
          <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="Email" required />
          <FormInput type="number" name="number" value={number} onChange={this.handleChange} label="Phone Number" required />
          <textarea rows="7" cols="50" name="message" value={message} onChange={this.handleChange} placeholder="Message..." />
          <CustomButton type="submit">SEND</CustomButton>
        </form>
      </div>
    )
  }
}

export default ContactPage
