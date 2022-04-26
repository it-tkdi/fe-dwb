import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';
import FabWA from './fabWA';

class Footer_v1 extends Component {

	state = {
		emailSubscribe: "",
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

	submitHandler = (e)=> {
		e.preventDefault();

		const { emailSubscribe, error} = this.state;

		if(emailSubscribe === ""){
			error.emailSubscribe = "Please enter your email";
		}
		if(error){
			this.setState({
				error,
			});
		}
		if(error.emailSubscribe === ""){
			this.setState({
				emailSubscribe: "",
				error: {},
			});
		}

		const dataToSubscribe = {
			emailSubscribe
		}
		// console.log(dataToSubscribe);

		axios.post("http://localhost:5000/subscribe", dataToSubscribe)
		.then(function(res){
			// console.log(res);
			if(res.data  === "success"){
				alert('Email Sent!');
			}
		}).catch((err)=>{
			console.log(err);
		})
	}

    componentDidMount() {

    	const $ = window.$;
    	
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

         $('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

				$(window).scrollTop(0);

			setTimeout(function(){
			    	$(".quarter-overlay").fadeOut(300);
				}, 800);

        });


		$(document).on('click','.theme-btn-1 ', function(){ 
            $( 'div' ).removeClass( 'modal-backdrop' );
            $( 'div' ).removeClass( 'show' );
            $( 'div' ).removeClass( 'fade' );
			$('body').attr("style", "");
        });
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
			<footer className="ltn__footer-area  ">
				{/* <FabWA /> */}
				  <div className="footer-top-area  section-bg-2 plr--5">
				    <div className="container-fluid">
				      <div className="row justify-content-around">
				        <div className="col-xl-3 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-about-widget">
				            <div className="footer-logo">
				              <div className="site-logo">
				                <img src={publicUrl+"assets/img/logo-4.png"} alt="Logo" />
				              </div>
				            </div>
				            {/* <p>Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of the printing.</p> */}
				            <div className="footer-address">
				              <ul>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-placeholder" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p>Jl. Kebagusan 1 Kav. 6, Jakarta Selatan</p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-call" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="tel:+622129406626">(021) - 294 066 26</a></p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-mail" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="mailto:office@deltawibawabersama.com">office@deltawibawabersama.com</a></p>
				                  </div>
				                </li>
				              </ul>
				            </div>
				            <div className="ltn__social-media mt-20">
						    	{/* <Social /> */}
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Company</h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/about">About</Link></li>
				                <li><Link to="/service">Services</Link></li>
				                <li><Link to="/gallery">Gallery</Link></li>
				                {/* <li><Link to="/team">Our Team</Link></li> */}
				                {/* <li><Link to="/faq">FAQ</Link></li> */}
				                <li><Link to="/contact">Contact us</Link></li>
				                <li><Link to="/complaint">Complaint</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        
				        <div className="col-xl-3 col-md-6 col-sm-12 col-12">
				          <div className="footer-widget footer-newsletter-widget">
				            <h4 className="footer-title">Newsletter</h4>
				            <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
				            <div className="footer-newsletter">
				              <form onSubmit={this.submitHandler}>
				                <input 
									value={this.state.emailSubscribe}
									onChange={this.changeHandler}
									type="email" 
									name="emailSubscribe" 
									placeholder="Email*" 
								/>
				                <div className="btn-wrapper">
				                  <button className="theme-btn-1 btn" type="submit"><i className="fas fa-location-arrow" /></button>
				                </div>
				              </form>
				            </div>
				            {/* <h5 className="mt-30">We Accept</h5>
				            <img src={publicUrl+"assets/img/icons/payment-4.png"} alt="Payment Image" /> */}
				          </div>
				        </div>
				      </div>
				    </div>
				  </div>
				  <Copyright />
				</footer>
        )
    }
}


export default Footer_v1