import React from 'react';
import Navbar from './global-components/navbar-v4';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import ContactForm from './section-components/contact-form';
import Map from './section-components/map';
import Footer from './global-components/footer';

const ContactV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Contact Us" subheader="Contact" />
        <ContactInfo />
        <ContactForm />
        <Map />
        <Footer />
    </div>
}

export default ContactV1

