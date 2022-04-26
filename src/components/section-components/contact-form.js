import axios from 'axios';
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

class ContactForm extends Component {
	state = {
		name: "",
		email: "",
		subject: "",
		phone: "",
		message: "",
		error: {},
	};

	changeHandler = (e) => {
		const error = this.state.error;
		error[e.target.name] = "";

		this.setState({
		[e.target.name]: e.target.value,
		error,
		});
	};

	submitHandler = (e) => {
		e.preventDefault();

		const {name, email, subject, phone, message, error} = this.state;

		if(name === "") {
			error.name = "Please enter your name";
		}
		if(email === "") {
			error.email = "Please enter your email"
		}
		if(subject === "") {
			error.subject = "Please select one"
		}
		if(phone === "") {
			error.phone = "Please input your phone number"
		}
		if(message === "") {
			error.message = "Please input your message"
		}

		if (error) {
			this.setState({
				error,
			});
		}
		if (
			error.name === "" &&
			error.email === "" &&
			error.subject === "" &&
			error.phone === "" &&
			error.message === ""
		) {
			this.setState({
				name: "",
				email: "",
				subject: "",
				phone: "",
				message: "",
				error: {},
			});
		}

		const dataToSubmit = {
			name,
			email,
			subject,
			phone,
			message
		};

		// console.log(dataToSubmit);
		axios
      .post("http://13.214.198.220:5000/", dataToSubmit)
      .then(function (res) {
        console.log(res);
        if (res.data === "success") {
          alert("Email Sent!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
	}

    render() {
		const { name, email, subject, phone, message, error } = this.state;

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__contact-message-area mb-120 mb--100">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="ltn__form-box contact-form-box box-shadow white-bg">
						<h4 className="title-2">Get A Quote</h4>
						<form id="contact-form" onSubmit={this.submitHandler} >
						<div className="row">
							<div className="col-md-6">
								<div className="input-item input-item-name ltn__custom-icon">
									<input 
										value={name}
										onChange={this.changeHandler}
										type="text" 
										name="name" 
										placeholder="Enter your name" 
									/>
								</div>
						            <p className="alert__text">{error.name ? error.name : ""}</p>
							</div>
							<div className="col-md-6">
								<div className="input-item input-item-email ltn__custom-icon">
									<input 
										value={email}
										onChange={this.changeHandler}
										type="email" 
										name="email" 
										placeholder="Enter email address" 
									/>
						            <p className="alert__text">{error.email ? error.email : ""}</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="input-item input-item-textarea ltn__custom-icon">
									<input
										value={subject} 
										onChange={this.changeHandler}
										type="text"
										name="subject"
										placeholder="Enter subject"
									/>
									{/* <select 
										value={selected}
										onChange={this.changeHandler}
										className="nice-select"
										name="selected"
									>
										<option value="Rent Office Space">Rent Office Space</option>
										<option value="Retail Space">Retail Space</option>
										<option value="Banking">Banking</option>
										<option value="Coffee Shop & Restaurant">Coffee Shop & Restaurant</option>
									</select> */}
						            <p  className="alert__text">{error.selected ? error.selected : ""}</p>
								</div>
							</div>
							<div className="col-md-6">
								<div className="input-item input-item-phone ltn__custom-icon">
									<input
										value={phone}
										onChange={this.changeHandler}
										type="text" 
										name="phone" 
										placeholder="Enter phone number" 
									/>
								</div>
						            <p className="alert__text">{error.phone ? error.phone : ""}</p>
							</div>
						</div>
						<div className="input-item input-item-textarea ltn__custom-icon">
							<textarea 
								value={message}
								onChange={this.changeHandler}
								name="message" 
								placeholder="Enter message" 
								// defaultValue={""} 
							/>
						</div>
						    <p className="alert__text">{error.message ? error.message : ""}</p>
						{/* <p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label></p> */}
						<div className="btn-wrapper mt-0">
							<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Send Message</button>
						</div>
						<p className="form-messege mb-0 mt-20" />
						</form>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ContactForm