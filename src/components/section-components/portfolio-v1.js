import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import GroundFloor from '../floor-gallery/GroundFloor';
import FirstFloor from '../floor-gallery/FirstFloor';
import AllFloor from '../floor-gallery/AllFloor';
import ThirdFloor from '../floor-gallery/ThirdFloor';
import FifthFloor from '../floor-gallery/FifthFloor';
import SixthFloor from '../floor-gallery/SixthFloor';
import NineTenFloor from '../floor-gallery/NineTenFloor';

class PortfolioV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__gallery-area mb-120">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							{/* <div className="section-title-area ltn__section-title-2--- text-center">
								<h6 className="section-subtitle section-subtitle-2">Building Sketch</h6>
								<h1 className="section-title">Gallery</h1>
							</div> */}

							<div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
							<div className="nav">
								<a data-bs-toggle="tab" href="#liton_tab_3_1">Ground Floor</a>
								<a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">All Floor</a>
								<a data-bs-toggle="tab" href="#liton_tab_3_3" >1st Floor</a>
								<a data-bs-toggle="tab" href="#liton_tab_3_4" >3rd Floor</a>
								<a data-bs-toggle="tab" href="#liton_tab_3_5" >5th Floor</a>
								<a data-bs-toggle="tab" href="#liton_tab_3_6" >6th Floor</a>
								<a data-bs-toggle="tab" href="#liton_tab_3_7" >9-10th Floor</a>
							</div>
							</div>
						</div>
					</div>

					{/* (ltn__gallery-info-hide) Class for 'ltn__gallery-item-info' not showing */}
					<div className="tab-content">
						<div className="tab-pane fade" id="liton_tab_3_1">
							<GroundFloor />
						</div>
						<div className="tab-pane fade active show" id="liton_tab_3_2">
							<AllFloor />
						</div>
						<div className="tab-pane fade" id="liton_tab_3_3">
							<FirstFloor />
						</div>
						<div className="tab-pane fade" id="liton_tab_3_4">
							<ThirdFloor />
						</div>
						<div className="tab-pane fade" id="liton_tab_3_5">
							<FifthFloor />
						</div>
						<div className="tab-pane fade" id="liton_tab_3_6">
							<SixthFloor />
						</div>
						<div className="tab-pane fade" id="liton_tab_3_7">
							<NineTenFloor />
						</div>
					</div>
					
				</div>
					
			</div>
    }
}

export default PortfolioV1