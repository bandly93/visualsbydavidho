import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactForm, contactFormSubmit } from '../redux/actions/actions.js';
import '../css/Contact.css';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            validForm: false,
        }
    }

    onChange = (e) => {
        this.props.input(e.target.name, e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = this.props.contact;
        const emailCheck = /@/g

        //Validation
        //Validate names
        if(data.firstname.match(/^[a-zA-Z]+$/) && data.lastname.match(/^[a-zA-Z]+$/)) {

            //Validate email
            if(emailCheck.test(data.email) == true) {
                this.props.submit(data)
            } else {
                alert('Please make sure your email is correct')
            }
            
        } else {
            alert("Please make sure you've spelled your name correctly")
        }
    }

    // handleValidation = () => {

    // }

    render() {
        return (
                <div className="contactContainer">

                    <h1>Contact Me</h1>

                    <form onSubmit={this.handleSubmit} className="contactForm">

                        <div className="contactName">
                            <label className="contactLabelName">
                                First Name *
                                <input 
                                    type="text"
                                    name="firstname"
                                    onChange={this.onChange}
                                    value={this.props.contact.firstname}
                                    required />
                            </label>

                            <label className="contactLabelName">
                                Last Name *
                                <input 
                                    type="text"
                                    name="lastname"
                                    onChange={this.onChange}
                                    value={this.props.contact.lastname}
                                    required />
                            </label>
                        </div>

                            <label className="contactLabel">
                                Email *
                                <input 
                                    type="text"
                                    name="email"
                                    onChange={this.onChange}
                                    value={this.props.contact.email}
                                    required />
                            </label>

                            <label className="contactLabel">
                                Subject *
                                <input 
                                    type="text"
                                    name="subject"
                                    onChange={this.onChange}
                                    value={this.props.contact.subject}
                                    required />
                            </label>

                            <label className="contactLabel">
                                Message *
                                <textarea 
                                    name="message"
                                    onChange={this.onChange}
                                    value={this.props.contact.message}
                                    required />
                            </label>

                            <input type="submit" value="Submit" />
                    </form>

                </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        contact : state.contact
    }
}

function mapDispatchToProps(dispatch) {
    return {
        input: (name, value) => {
            dispatch(contactForm(name, value))
        },
        submit: (data) => {
            dispatch(contactFormSubmit(data))
        }
    }
}

export default {
    component: connect(mapStateToProps, mapDispatchToProps)(Contact)
}