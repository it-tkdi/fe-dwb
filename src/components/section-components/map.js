import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Map extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="google-map mb-120">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7236993523875!2d106.83016081471715!3d-6.299990895440428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69edf7c9fbc705%3A0x2069199c73ba6be9!2sOleos%202!5e0!3m2!1sid!2sid!4v1638873988131!5m2!1sid!2sid" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
		</div>
        }
}

export default Map