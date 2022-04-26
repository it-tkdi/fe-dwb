import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';

class Navbar extends Component {
	
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
		<div>
           <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
			{/* <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
				<div className="container">
				</div>
			</div> */}
			<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black header__sticky-1 header__1">
				<div className="container">
				<div className="row">
					<div className="col">
					<div className="site-logo-wrap">
						<div className="site-logo go-top">
						<Link to="/"><img src={publicUrl+"assets/img/logo-4.png"} alt="Logo" /></Link>
						</div>
						<div className="get-support clearfix d-none">
						<div className="get-support-icon">
							<i className="icon-call" />
						</div>
						<div className="get-support-info">
							<h6>Get Support</h6>
							<h4><a href="tel:+6281717710888">+62 817-1771-0888</a></h4>
						</div>
						</div>
					</div>
					</div>
					<div className="col header-menu-column">
					<div className="header-menu d-none d-xl-block">
						<nav>
						<div className="ltn__main-menu go-top">
							<ul>
							<li><Link to="/" className="main-nav">Home</Link></li>
							<li><Link to="/about" className="main-nav">About</Link></li>
							<li><Link to="/service" className="main-nav">Services</Link></li>
							<li><Link to="/gallery" className="main-nav">Gallery</Link></li>
							<li><Link to="/contact" className="main-nav">Contact</Link></li>
							<li><Link to="/complaint" className="main-nav">Complaint</Link></li>
							</ul>
						</div>
						</nav>
					</div>
					</div>
					<div className="col ltn__header-options ltn__header-options-2 mb-sm-20">

					{/* Mobile Menu Button */}
					<div className="mobile-menu-toggle d-xl-none">
						<a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
						<svg viewBox="0 0 800 600">
							<path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
							<path d="M300,320 L540,320" id="middle" />
							<path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
						</svg>
						</a>
					</div>
					</div>
				</div>
				</div>
			</div>
			</header>
			<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
				<div className="ltn__utilize-menu-inner ltn__scrollbar">
					<div className="ltn__utilize-menu-head">
					<div className="site-logo">
						<Link to="/"><img src={publicUrl+"assets/img/logo-5.png"} alt="Logo" /></Link>
					</div>
					<button className="ltn__utilize-close">×</button>
					</div>
					<div className="ltn__utilize-menu-search-form">
					<form action={"#"}>
						<input type="text" placeholder="Search..." />
						<button><i className="fas fa-search" /></button>
					</form>
					</div>
					<div className="ltn__utilize-menu">
					<ul>
						<li><a href="/">Home</a></li>
						<li><Link to="/about">About</Link></li>
						<li><Link to="/service">Services</Link></li>
						<li><Link to="/gallery">Gallery</Link></li>
						<li><Link to="/contact">Contact</Link></li>
						<li><Link to="/complaint">Complaint</Link></li>
					</ul>
					</div>
					{/* <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
						<ul>
							<li>
							<Link to="/my-account" title="My Account">
								<span className="utilize-btn-icon">
								<i className="far fa-user" />
								</span>
								My Account
							</Link>
							</li>
							<li>
							<Link to="/wishlist" title="Wishlist">
								<span className="utilize-btn-icon">
								<i className="far fa-heart" />
								<sup>3</sup>
								</span>
								Wishlist
							</Link>
							</li>
							<li>
							<Link to="/cart" title="Shoping Cart">
								<span className="utilize-btn-icon">
								<i className="fas fa-shopping-cart" />
								<sup>5</sup>
								</span>
								Shoping Cart
							</Link>
							</li>
						</ul>
					</div> */}
					{/* <div className="ltn__social-media-2">
					<ul>
						<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
						<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
						<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
						<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
					</ul>
					</div> */}
				</div>
			</div>

		</div>
        )
    }
}


export default Navbar