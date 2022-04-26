import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV5 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__about-us-area pb-115 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-5 align-self-center">
					<div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
						<img src={publicUrl+"assets/img/service/about-2.png"} alt="Image" />
					</div>
					</div>
					<div className="col-lg-7 align-self-center">
					<div className="about-us-info-wrap">
						<div className="section-title-area ltn__section-title-2--- mb-20">
						<h6 className="section-subtitle section-subtitle-2">About Us</h6>
						<h1 className="section-title">PT. Delta Wibawa Bersama</h1>
						<p>Our main business is to rent office room with affordable and competitive budgets. 
							The availability of rooms space from 80-190 m<sup>2</sup> with rooms that are quite comfortable, 
							public access is easy to reach.</p><br />
						<p>Less Cost, More Time For Business.</p>
						</div>
						{/* <div className="about-us-info-wrap-inner about-us-info-devide---">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						</div> */}
						<div className="btn-wrapper animated">
						<Link to="/about" className="theme-btn-1 btn btn-effect-1 text-uppercase">About Us</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>	
        }
}

export default AboutV5