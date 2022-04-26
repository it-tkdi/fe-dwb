import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";

import HomeV5 from './components/home-v5';

import About from './components/about';
import Service from './components/service';
import ServiceDetails from './components/service-details';
import Portfolio from './components/portfolio';
import PortfolioV2 from './components/portfolio-v2';
import PortfolioDetails from './components/portfolio-details';
import Team from './components/team';
import TeamDetails from './components/team-details';
import Error  from './components/404';
import Location  from './components/location';

import ProdductDetails from './components/product-details';

import BlogGrid from './components/blog-grid';
import BlogLeftSidebar from './components/blog-left-sidebar';
import BlogRightSidebar from './components/blog-right-sidebar';
import Blog from './components/blog';

import BlogDetails from './components/blog-details';
import Contact from './components/contact';
import History from './components/history';
import FloorDetails from './components/faq';
import Complaint from './components/complaint';

class Root extends Component {
    render() {
        return (
          <HashRouter basename="/">
            <div>
              <Switch>
                <Route exact path="/" component={HomeV5} />
                <Route path="/home-v5" component={HomeV5} />

                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/service-details" component={ServiceDetails} />
                <Route path="/gallery" component={Portfolio} />
                <Route path="/portfolio-v2" component={PortfolioV2} />
                <Route path="/portfolio-details" component={PortfolioDetails} />
                <Route path="/team" component={Team} />
                <Route path="/team-details" component={TeamDetails} />
                <Route path="/floor-details" component={FloorDetails} />
                <Route path="/404" component={Error} />
                <Route path="/location" component={Location} />

                <Route path="/product-details" component={ProdductDetails} />
                {/* blog */}
                <Route path="/blog-grid" component={BlogGrid} />
                <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
                <Route
                  path="/blog-right-sidebar"
                  component={BlogRightSidebar}
                />
                <Route path="/blog" component={Blog} />

                <Route path="/blog-details" component={BlogDetails} />
                <Route path="/contact" component={Contact} />
                <Route path="/history" component={History} />

                <Route path="/complaint" component={Complaint} />
              </Switch>
            </div>
          </HashRouter>
        );
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('quarter'));
