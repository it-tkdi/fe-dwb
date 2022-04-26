import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FeaturesV1 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'

    let customClass = this.props.customClass ? this.props.customClass :''

    return <div className={ customClass } >
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2">Our Business</h6>
			          <h1 className="section-title">Main Focus</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__custom-gutter--- justify-content-center go-top">
			      <div className="col-lg-3 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/feature-icon-1.svg"} alt="#" style={{width: 200, height: 200}} />
			          </div>
			          <div className="ltn__feature-info">
			            <h3>Rent Office Space</h3>
			            <p>comfortable room design.</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/feature-icon-3.svg"} alt="#" style={{width: 200, height: 200}} />
			          </div>
			          <div className="ltn__feature-info">
			            <h3>Retail Space</h3>
						<p>affordable and flexible retail space solutions.</p>
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-3 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/feature-icon-2.svg"} alt="#" style={{width: 200, height: 200}} />
			          </div>
			          <div className="ltn__feature-info">
			            <h3>Banking</h3>
						<p>services that help facilitate banking transactions.</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-3 col-sm-6 col-12">
			        <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			          <div className="ltn__feature-icon">
			            <img src={publicUrl+"assets/img/icons/icon-img/feature-icon-4.svg"} alt="#" style={{width: 200, height: 200}} />
			          </div>
			          <div className="ltn__feature-info">
			            <h3>Coffee Shop & Restaurant</h3>
						<p>good food and cozy place.</p>
			          </div>
			        </div>
			      </div>
				  
			    </div>
			  </div>
			</div>
        }
}

export default FeaturesV1