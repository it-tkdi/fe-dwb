import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class AboutV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__about-us-area pt-120 pb-90 ">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-img-wrap about-img-left">
			          <img src={publicUrl+"assets/img/others/about-02.png"} alt="oleos-building-for-working-space" />
			        </div>
			      </div>
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2--- mb-20 text-justify">
			            <h6 className="section-subtitle section-subtitle-2">About Us</h6>
			            <h1 className="section-title">PT. Delta Wibawa Bersama</h1>
			            <p className="text__align">
							PT. Delta Wibawa Bersama is a company whose main business is renting out workspaces with affordable 
							and competitive budgets. Room availability ranging from 80-190 m<sup>2</sup> with a room design that is quite safe, 
							flexible, and comfortable. PT. Delta Wibawa Bersama is always committed to be able to provide the best service, 
							especially in terms of location, facilities, and technology in order to optimally support your business activities.
						</p><br />
						{/* <p>Less Cost, More Time For Business.</p> */}
			          </div>
			          {/* <ul className="ltn__list-item-half clearfix">
			            <li>
			              <i className="flaticon-building" />
			              Smart Building Design
			            </li>
			            <li>
			              <i className="flaticon-mountain" />
			              Beautiful Scene Around
			            </li>
			            <li>
			              <i className="flaticon-parking" />
			              Parking Space
			            </li>
			            <li>
			              <i className="flaticon-secure" />
			              Complete 24/7 Security
			            </li>
			          </ul>
			          <div className="ltn__callout bg-overlay-theme-05  mt-30">
			            <p>"Enimad minim veniam quis nostrud exercitation <br />
			              llamco laboris. Lorem ipsum dolor sit amet" </p>
			          </div>
			          <div className="btn-wrapper animated go-top">
			            <Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
			          </div> */}
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default AboutV1