import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ApartmentV1 extends Component {

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'
	let CustomClass = this.props.CustomClass ? this.props.CustomClass : ''

    return <div className={"ltn__apartments-plan-area pt-115--- pb-70 "+CustomClass}>
			  <div className="container mt-5">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2">Building Sketch</h6>
			          <h1 className="section-title">Floor Plan</h1>
			        </div>

			        <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
			          <div className="nav">
			            <a data-bs-toggle="tab" href="#liton_tab_3_1">Mezzanine Floor</a>
			            <a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">01-02 Floor</a>
			            <a data-bs-toggle="tab" href="#liton_tab_3_3" >03-09 Floor</a>
			            <a data-bs-toggle="tab" href="#liton_tab_3_4" >Zone A</a>
			            <a data-bs-toggle="tab" href="#liton_tab_3_5" >Zone B</a>
			            <a data-bs-toggle="tab" href="#liton_tab_3_6" >Special Budget Space</a>
			          </div>
			        </div>

			        <div className="tab-content">
			          <div className="tab-pane fade" id="liton_tab_3_1">
			            <div className="ltn__apartments-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
			                    <h2>Mezzanine Floor</h2>
			                    <p>
									East and west side direction with city and green view each side. Typical floor.
								</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
									<li><label>Front Net Office Space</label> <span>83,09 m<sup>2</sup></span></li>
									<li><label>Back Net Office Space</label> <span>85,81 m<sup>2</sup></span></li>
			                        <li><label>Total Gross Area</label> <span>265,30 m<sup>2</sup></span></li>
			                      </ul>
			                    </div>
								<div className="btn-wrapper go-top">
									<Link className="btn btn-effect-10 btn__custom" to="/floor-details">View Details <i className="icon-next" /></Link>
								</div>
			                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/denah-lantai-mezzanine.png"} alt="denah-lantai-mezzanine" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>

			          <div className="tab-pane fade active show" id="liton_tab_3_2">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
			                    <h2>01-02 Floor</h2>
			                    <p>
									East and west side direction with city and green view each side. Typical semi fitted out and bare floor.
								</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
									<li><label>Front Net Office Space</label> <span>192,20 m<sup>2</sup></span></li>
									<li><label>Back Net Office Space</label> <span>135,74 m<sup>2</sup></span></li>
			                        <li><label>Total Gross Area</label> <span>431,30 m<sup>2</sup></span></li>
			                        <li><label>Balcony</label> <span>Allowed</span></li>
			                      </ul>
			                    </div>
								<div className="btn-wrapper go-top">
									<Link className="btn btn-effect-10 btn-white" to="/floor-details">View Details <i className="icon-next" /></Link>
								</div>
			                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/denah-lantai-1-2.png"} alt="denah-lantai-1-2" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>

			          <div className="tab-pane fade" id="liton_tab_3_3">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
			                    <h2>03-09 Floor</h2>
			                    <p>
									East and west side direction with city and green view each side. Typical semi fitted out and bare floor.
								</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Front Net Office Space</label> <span>192,20 m<sup>2</sup></span></li>
									<li><label>Back Net Office Space</label> <span>135,74 m<sup>2</sup></span></li>
			                        <li><label>Total Gross Area</label> <span>431,30 m<sup>2</sup></span></li>
			                        <li><label>Balcony</label> <span>Allowed</span></li>
			                        {/* <li><label>Lounge</label> <span>650 Sq. Ft</span></li> */}
			                      </ul>
			                    </div>
								<div className="btn-wrapper go-top">
									<Link className="btn btn-effect-10 btn-white" to="/floor-details">View Details <i className="icon-next" /></Link>
								</div>
			                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/denah-lantai-3-9.png"} alt="denah-lantai-3-9" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>

			          <div className="tab-pane fade" id="liton_tab_3_4">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
			                    <h2>Zone A</h2>
			                    <p>
									East side direction with city view. Typical floor.
								</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Semi Gross</label> <span>234,20 m<sup>2</sup></span></li>
			                        <li><label>Balcony</label> <span>Allowed</span></li>
			                      </ul>
			                    </div>
								<div className="btn-wrapper go-top">
									<Link className="btn btn-effect-10 btn-white" to="/floor-details">View Details <i className="icon-next" /></Link>
								</div>
			                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/10.png"} alt="denah-lantai-3-9" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
					  
			          <div className="tab-pane fade" id="liton_tab_3_5">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
			                    <h2>Zone B</h2>
			                    <p>
									West side direction with green view. Typical floor.
								</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Semi Gross</label> <span>166,00 m<sup>2</sup></span></li>
			                        <li><label>Balcony</label> <span>Allowed</span></li>
			                      </ul>
			                    </div>
								<div className="btn-wrapper go-top">
									<Link className="btn btn-effect-10 btn-white" to="/floor-details">View Details <i className="icon-next" /></Link>
								</div>
			                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/10.png"} alt="#" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>

					  <div className="tab-pane fade" id="liton_tab_3_6">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-6">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
			                    <h2>Special Budget Space</h2>
			                    <p>Enimad minim veniam quis nostrud exercitation ullamco laboris.
			                      Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
			                      eiusmod tempor.Incididunt labore et dolore magna aliqua.
			                      sed ayd minim veniam.</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
			                      </ul>
			                    </div>
								<div className="btn-wrapper go-top">
									<Link className="btn btn-effect-10 btn-white" to="/floor-details">View Details <i className="icon-next" /></Link>
								</div>
			                  </div>
			                </div>
			                <div className="col-lg-6">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/10.png"} alt="#" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>

			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default ApartmentV1