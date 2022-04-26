import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import Category from './section-components/category-v1';

const Service_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Services" subheader="Services" />
        <Category />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Service_V1

