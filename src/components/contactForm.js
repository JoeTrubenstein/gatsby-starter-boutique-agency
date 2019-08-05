import React from "react"
import { Button, Form, FormGroup, Label, Input } from "reactstrap"

const ContactForm = () => {
  return (
    <Form
      name="boutique"
      method="post"
      data-netlify="true"
      data-netlify-recaptcha="true"
      data-netlify-honeypot="bot-field"
    >
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="email address"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input type="textarea" name="text" id="exampleText" />
      </FormGroup>
      <Button style={{ backgroundColor: `#00abe8` }}>Submit</Button>
    </Form>
  )
}

export default ContactForm
