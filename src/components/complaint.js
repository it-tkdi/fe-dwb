import React from 'react'
import Navbar from './global-components/navbar-v4'
import PageHeader from "./global-components/page-header";
import Footer from "./global-components/footer";
import ComplaintForm from './section-components/complaint-form';

const Complaint = () => {
  return (
    <div>
      <Navbar />
      <PageHeader headertitle="Complaint" subheader="Complaint" />
      <ComplaintForm />
      <Footer />
    </div>
  );
}

export default Complaint