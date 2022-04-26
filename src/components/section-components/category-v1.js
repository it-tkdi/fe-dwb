import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CategoryV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-90 go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2">Our Aminities</h6>
			          <h1 className="section-title">Building Aminities</h1>
			        </div>
			      </div>
			    </div>

			    <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center">
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/car.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-car" /></span> */}
							<span className="category-title">Parking Space</span>
							{/* <span className="category-btn"><i className="flaticon-right-arrow" /></span> */}
						</div>
			          {/* </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							{/* <span className="category-icon"> */}
							<img src={publicUrl+"assets/img/icons/praying.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* </span> */}
				            <span className="category-title">Praying Room</span>
				            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span> */}
						</div>
			          {/* </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/secure-shield.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-secure-shield" /></span> */}
							<span className="category-title">24H Security</span>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span> */}
						</div>
			          {/* </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/wifi.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-stethoscope" /></span> */}
							<span className="category-title">Internet</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span>
			          </Link> */}
			        </div>
			      </div>

			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/electric-generator.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-book" /></span> */}
							<span className="category-title">Power Backup</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span>
			          </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/fire-extinguisher.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-bed-1" /></span> */}
							<span className="category-title">Fire Safety</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span>
			          </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/ac.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-home-2" /></span> */}
							<span className="category-title">AC Split</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span>
			          </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/balcony.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-slider" /></span> */}
							<span className="category-title">Balcony</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span> */}
			          {/* </Link> */}
			        </div>
			      </div>

				<div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/receptionist.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-book" /></span> */}
							<span className="category-title">Receptionist</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span>
			          </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/bucket.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-bed-1" /></span> */}
							<span className="category-title">Cleaning Service</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span> */}
			          {/* </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/lounge.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-home-2" /></span> */}
							<span className="category-title">Lounge</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span> */}
			          {/* </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/elevator.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-slider" /></span> */}
							<span className="category-title">Lift</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span>
			          </Link> */}
			        </div>
			      </div>
				  
				  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/container.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-book" /></span> */}
							<span className="category-title">Loading</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span> */}
			          {/* </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
					  	<div className="card__">
							<img src={publicUrl+"assets/img/icons/toilet.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-bed-1" /></span> */}
							<span className="category-title">Executive Toilet</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span> */}
			          {/* </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
					  	<div className="card__">
							<img src={publicUrl+"assets/img/icons/man-silhouette-touching-ceiling.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-home-2" /></span> */}
							<span className="category-title">Ceiling 2.7m</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span>
			          </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/shop.png"} style={{width: 61, height: 61}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-slider" /></span> */}
							<span className="category-title">Restaurant & Coffee Shop</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span>
			          </Link> */}
			        </div>
			      </div>

				  <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/draws.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-book" /></span> */}
							<span className="category-title">Semi Fit Out Floor</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span> */}
			          {/* </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
					  	<div className="card__">
							<img src={publicUrl+"assets/img/icons/floor.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-bed-1" /></span> */}
							<span className="category-title">Bare Floor</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span> */}
			          {/* </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
					  	<div className="card__">
							<img src={publicUrl+"assets/img/icons/settings.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-home-2" /></span> */}
							<span className="category-title">IT System</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span>
			          </Link> */}
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 text-center">
			          {/* <Link to="#"> */}
						<div className="card__">
							<img src={publicUrl+"assets/img/icons/blueprint.png"} style={{width: 100, height: 100}} alt="gambar" />
							{/* <span className="category-icon"><i className="flaticon-slider" /></span> */}
							<span className="category-title">Design Interior</span>
						</div>
			            {/* <span className="category-btn"><i className="flaticon-right-arrow" /></span>
			          </Link> */}
			        </div>
			      </div>

			    </div>

				<div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center">
					<div className="col-lg-12">
						<div className="ltn__category-item ltn__category-item-5 text-center">
						{/* <Link to="#"> */}
							<div className="card__">
								<img src={publicUrl+"assets/img/icons/meeting-room.png"} style={{width: 120, height: 120}} alt="gambar" />
								{/* <span className="category-icon"><i className="flaticon-bed-1" /></span> */}
								<span className="category-title">Small Places for Startup Business</span>
							</div>
							{/* <span className="category-btn"><i className="flaticon-right-arrow" /></span> */}
						{/* </Link> */}
						</div>
			      </div>
				</div>
			  </div>
			</div>
        }
}

export default CategoryV1