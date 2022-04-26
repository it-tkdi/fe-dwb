import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class FaqV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__faq-area mb-100">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="ltn__faq-inner ltn__faq-inner-2">
                    <div id="accordion_2">
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
                        Mezzanine Floor
                        </h6>
                        <div id="faq-item-2-1" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <div className="alignleft mb-3">
                                <img src={publicUrl+"assets/img/others/denah-lantai-mezzanine.png"} alt="gambar" />
                            </div>
                            <p>
                                East and west side direction with city and green view each side. Typical floor.
                                <br/>
                                Net Office Space: Front 83,09m<sup>2</sup> Back 85,81m<sup>2</sup><br/>
                                Minimun Lease Term: 1 Year <br/>
                                Payment Term: Quarterly in advance<br/>
                                Price: Rp. 160.000 (exclude 10% VAT)<br/>
                                Service Charge: Rp. 55.000 (exclude 10% VAT)
                            </p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="true"> 
                        01-02 Floor
                        </h6>
                        <div id="faq-item-2-2" className="collapse show" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <div className="alignleft mb-3">
                                <img src={publicUrl+"assets/img/others/denah-lantai-1-2.png"} alt="gambar" />
                            </div>
                            <p>
                                East and west side direction with city and green view each side. Typical semi fitted out and bare floor.
                                <br/>
                                Net Office Space: Front 192,20m<sup>2</sup> Back 135,74m<sup>2</sup><br/>
                                Minimun Lease Term: 1 Year <br/>
                                Payment Term: Quarterly in advance<br/>
                                Price: Rp. 145.000 (exclude 10% VAT)<br/>
                                Service Charge: Rp. 55.000 (exclude 10% VAT)
                            </p>
                        </div>
                        </div>
                    </div>                          
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
                        03-09 Floor
                        </h6>
                        <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <div className="alignleft mb-3">
                                <img src={publicUrl+"assets/img/others/denah-lantai-3-9.png"} alt="gambar" />
                            </div>
                            <p>
                                East and west side direction with city and green view each side. Typical semi fitted out and bare floor.
                                <br/>
                                Net Office Space: Front 192,20m<sup>2</sup> Back 135,74m<sup>2</sup><br/>
                                Minimun Lease Term: 1 Year <br/>
                                Payment Term: Quarterly in advance<br/>
                                Price: Rp. 145.000 (exclude 10% VAT)<br/>
                                Service Charge: Rp. 55.000 (exclude 10% VAT)
                            </p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-4" aria-expanded="false">
                        Zone A
                        </h6>
                        <div id="faq-item-2-4" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <div className="alignleft mb-3">
                                <img src={publicUrl+"assets/img/bg/17.jpg"} alt="gambar" />
                            </div>
                            <p>
                                East side direction with city view. Typical floor.
                                <br/>
                                Semi Gross: Front 234,2m<sup>2</sup> Back 166m<sup>2</sup><br/>
                                Minimun Lease Term: 1 Year <br/>
                                Payment Term: Quarterly in advance<br/>
                                Price: Rp. 145.000 (exclude 10% VAT)<br/>
                                Service Charge: Rp. 55.000 (exclude 10% VAT)
                            </p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-5" aria-expanded="false">
                        Zone B
                        </h6>
                        <div id="faq-item-2-5" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <div className="alignleft mb-3">
                                <img src={publicUrl+"assets/img/bg/17.jpg"} alt="gambar" />
                            </div>
                            <p>
                                West side direction with green view. Typical floor.
                                <br/>
                                Semi Gross: Front 234,2m<sup>2</sup> Back 166m<sup>2</sup><br/>
                                Minimun Lease Term: 1 Year <br/>
                                Payment Term: Quarterly in advance<br/>
                                Price: Rp. 145.000 (exclude 10% VAT)<br/>
                                Service Charge: Rp. 55.000 (exclude 10% VAT)
                            </p>
                        </div>
                        </div>
                    </div>
                    {/* card */}
                    <div className="card">
                        <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-6" aria-expanded="false">
                        Special Budget Space
                        </h6>
                        <div id="faq-item-2-6" className="collapse" data-bs-parent="#accordion_2">
                        <div className="card-body">
                            <div className="alignleft mb-3">
                                <img src={publicUrl+"assets/img/bg/17.jpg"} alt="gambar" />
                            </div>
                            <p>
                                East and west side direction with city and green view each side. Typical semi fitted out and bare floor.
                                <br/>
                                Net Office Space: Front 192,20m<sup>2</sup> Back 135,74m<sup>2</sup><br/>
                                Minimun Lease Term: 1 Year <br/>
                                Payment Term: Quarterly in advance<br/>
                                Price: Rp. 145.000 (exclude 10% VAT)<br/>
                                Service Charge: Rp. 55.000 (exclude 10% VAT)
                            </p>
                        </div>
                        </div>
                    </div>
                    
                    </div>

                    <div className="need-support text-center mt-100">
                    <h2>Still need help? Reach out to support:</h2>
                    <div className="btn-wrapper mb-30 go-top">
                        <Link to="/contact" className="theme-btn-1 btn btn-effect-1">Contact Us</Link>
                    </div>
                    <h3>
                        <a href="tel:+6281717710888"><i className="fas fa-phone" /> +62 817-1771-0888</a>
                    </h3>
                    </div>

                </div>
                </div>
                
            </div>
            </div>
        </div>
  
        }
}

export default FaqV1