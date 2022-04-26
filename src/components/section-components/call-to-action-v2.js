import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CallToActonV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__call-to-action-area ltn__call-to-action-4 bg-image pt-115 pb-120 " data-bs-bg={publicUrl+"assets/img/bg/bg-7.png"}>
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="call-to-action-inner call-to-action-inner-4 text-center">
						<div className="section-title-area ltn__section-title-2">
						<h6 className="section-subtitle text__color">Any question you have?</h6>
						<h1 className="section-title white-color">+62 817-1771-0888</h1>
						</div>
						<div className="btn-wrapper">
						<a href="tel:+6281717710888" className="theme-btn-1 btn btn-effect-1">MAKE A CALL</a>
						<span className="go-top"><Link to="/contact" className="btn btn-transparent btn-effect-3 white-color go-top">CONTACT US</Link></span>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default CallToActonV2