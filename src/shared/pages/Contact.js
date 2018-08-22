import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Contact.css';

class Contact extends Component {
    render() {
        return (
                <div className="contactContainer">

                    <h1>Contact Me</h1>

                    <form className="contactForm">

                        <div className="contactName">
                            <label className="contactLabelName">
                                <input 
                                    type="text"
                                    name="firstname"
                                    value={null}
                                    required />
                                    First Name *
                            </label>

                            <label className="contactLabelName">
                                <input 
                                    type="text"
                                    name="lastname"
                                    value={null}
                                    required />
                                    Last Name *
                            </label>
                        </div>

                            <label className="contactLabel">
                                <input 
                                    type="text"
                                    name="email"
                                    value={null}
                                    required />
                                    Email *
                            </label>

                            <label className="contactLabel">
                                <input 
                                    type="text"
                                    name="subject"
                                    value={null}
                                    required />
                                    Subject *
                            </label>

                            <label className="contactLabel">
                                <textarea 
                                    name="message"
                                    value={null}
                                    required />
                                    Message *
                            </label>

                            <input type="submit" value="Submit" />
                    </form>


                </div>
        )
    }
}

// function mapStateToProps(state) {

// }

// function mapDispatchToProps(dispatch) {

// }

export default {
    component: 
    // connect(mapStateToProps, mapDispatchToProps)
    (Contact)
}