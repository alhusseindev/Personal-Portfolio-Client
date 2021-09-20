import React from 'react';
import './ContactFormSection.scss';
import axios from 'axios';


export default class ContactFormSection extends React.Component{
    constructor(){
        super();
        this.state = {
            inquiry: [
                {
                    id: 0,
                    name: "Name",
                    phoneNumber: "Phone Number",
                    email: "Email",
                    message: "Message"
                }
        ],
            errorMessage: ""
        };
    }

    handleChange = (event) =>{
        //selecting inquiry from state
        const { name, value} = event.target;
        //setting the state
        this.setState({inquiry:{...this.state.inquiry, [name]:value}});
        console.log(`Input Change Detected!`);
    }

    handleFormSubmission = (event) =>{
        event.preventDefault();
        this.setState({errorMessage: "Message Sent Successfully!"});
    }

    submitInquiry = () =>{
        axios.post(`https://alhussein-portfolio-api.herokuapp.com/inquiries/inquiry/new`)
            .then((response) =>{
                this.setState({inquiry: response.data});
            }).catch((error) =>{
                this.setState({errorMessage: this.state.errorMessage.concat(error)});
        })
    }

    render() {
        return (
            <>
                <section className="inquiry-section" id="contact-inquiry-section">
                    <div className="contact-form-div">
                        {/*<h1 className="inquiry-text">Have an Inquiry ?</h1>*/}

                    </div>
                    <form className="contact-form" onSubmit={this.handleFormSubmission}>
                        <h2 className="contact-title">Get In Touch!</h2>
                        <label htmlFor="contact-name" className="contact-label">Name:</label>
                        <input type="text" id="contact-name" className="contact-text" placeholder="Name" onChange={this.handleChange} />
                        <br/>
                        <label htmlFor="phone-number" className="contact-label">Phone Number:</label>
                        <input type="number" id="phone-number" className="contact-text" placeholder="Phone Number" onChange={this.handleChange} />
                        <br/>
                        <label htmlFor="email" className="contact-label">Email:</label>
                        <input type="email" id="email" className="contact-text" placeholder="Email" onChange={this.handleChange} />
                        <br/>
                        <label htmlFor="message" className="contact-label" id="message-label">Message:</label>
                        <br/>
                        <input type="text" id="message" className="contact-text" placeholder="Message" onChange={this.handleChange} />
                        <div className="button_container">
                            <button type="submit" className="submit-button" onClick={() => this.submitInquiry()} onSubmit={this.handleFormSubmission}>Submit</button>
                            <p className="error__message"> { this.state.errorMessage } </p>
                        </div>
                    </form>
                </section>
            </>
        );
    }
}
