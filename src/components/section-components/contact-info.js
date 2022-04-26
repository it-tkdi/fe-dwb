import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ContactInfo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return (
      <div className="ltn__contact-address-area mb-90">
        <div className="container container__align">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/icon-1.png"}
                    alt="Icon email perusahaan PT DWB"
                  />
                </div>
                <h3>Email Address</h3>
                <a href="mailto:office@deltawibawabersama.com">
                  office@deltawibawabersama.com
                </a>
              </div>
            </div>
            {/* <div className="col-lg-6 ">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/icon-4.png"}
                    alt="Icon whatsapp perusahaan PT DWB"
                  />
                </div>
                <h3>Whatsapp</h3>
                <a
                  href="https://api.whatsapp.com/send?phone=6281717710888"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +62 817-1771-0888 (Dewi)
                </a>
                <br />
              </div>
            </div> */}

            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow ">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/icon-2.png"}
                    alt="Icon telephone perusahaan PT DWB"
                  />
                </div>
                <h3>Phone Number</h3>
                <a href="tel:+62129406626">(021) - 294 066 26</a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow ">
                <div className="ltn__contact-address-icon">
                  <img
                    src={publicUrl + "assets/img/icons/icon-3.png"}
					height={78}
                    alt="Icon lokasi perusahaan PT DWB"
                  />
                </div>
                <h3>Office Address</h3>
                <span>
                  Jl. Kebagusan 1 Kav.6, Jakarta Selatan.
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
        }
}

export default ContactInfo