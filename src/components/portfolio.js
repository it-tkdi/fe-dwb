import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import PortfolioV1 from './section-components/portfolio-v1';
import CallToActonV2 from './section-components/call-to-action-v2';
import Footer from './global-components/footer';

const Portfolio_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Gallery" subheader="Gallery" />
        <PortfolioV1 />
        <CallToActonV2 />
        <Footer />
    </div>
}

export default Portfolio_V1

