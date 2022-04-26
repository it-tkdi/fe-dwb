import React from 'react'

const SixthFloor = () => {
    let publicUrl = process.env.PUBLIC_URL+'/';

    return (
        <div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---">
            <div className="ltn__gallery-sizer col-1" />
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
                <div className="ltn__gallery-item-inner">
                    <div className="ltn__gallery-item-img">
                    <a href={publicUrl+"assets/img/gallery/portfolio-6thfloor-zone-a.png"} data-rel="lightcase:myCollection">
                        <img src={publicUrl+"assets/img/gallery/portfolio-6thfloor-zone-a.png"} alt="6th-floor-zone-a" />
                        <span className="ltn__gallery-action-icon">
                        <i className="fas fa-search" />
                        </span>
                    </a>
                    </div>
                    <div className="ltn__gallery-item-info">
                        <h4 className="go-top">6th Floor Zone A</h4>
                        <p>East Direction, Semi Fitted Out with Parquet Floor</p>
                    </div>
                </div>
            </div>
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
                <div className="ltn__gallery-item-inner">
                    <div className="ltn__gallery-item-img">
                    <a href={publicUrl+"assets/img/gallery/portfolio-6thfloor-zone-a-2.png"} data-rel="lightcase:myCollection">
                        <img src={publicUrl+"assets/img/gallery/portfolio-6thfloor-zone-a-2.png"} alt="6th-floor-zone-a" />
                        <span className="ltn__gallery-action-icon">
                        <i className="fas fa-search" />
                        </span>
                    </a>
                    </div>
                    <div className="ltn__gallery-item-info">
                        <h4 className="go-top">6th Floor Zone A</h4>
                        <p>Inside The Room Left Side</p>
                    </div>
                </div>
            </div>
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
                <div className="ltn__gallery-item-inner">
                    <div className="ltn__gallery-item-img">
                    <a href={publicUrl+"assets/img/gallery/portfolio-6thfloor-zone-a-3.png"} data-rel="lightcase:myCollection">
                        <img src={publicUrl+"assets/img/gallery/portfolio-6thfloor-zone-a-3.png"} alt="6th-floor-zone-a" />
                        <span className="ltn__gallery-action-icon">
                        <i className="fas fa-search" />
                        </span>
                    </a>
                    </div>
                    <div className="ltn__gallery-item-info">
                        <h4 className="go-top">6th Floor Zone A</h4>
                        <p>Inside The Room with City View and Balcony Facilities</p>
                    </div>
                </div>
            </div>

            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
                <div className="ltn__gallery-item-inner">
                    <div className="ltn__gallery-item-img">
                    <a href={publicUrl+"assets/img/gallery/portfolio-6thfloor-zone-b.png"} data-rel="lightcase:myCollection">
                        <img src={publicUrl+"assets/img/gallery/portfolio-6thfloor-zone-b.png"} alt="6th-floor-zone-b" />
                        <span className="ltn__gallery-action-icon">
                        <i className="fas fa-search" />
                        </span>
                    </a>
                    </div>
                    <div className="ltn__gallery-item-info">
                        <h4 className="go-top">6th Floor Zone B</h4>
                        <p>West Direction, Semi Fitted Out with Ceramic Floor</p>
                    </div>
                </div>
            </div>
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
                <div className="ltn__gallery-item-inner">
                    <div className="ltn__gallery-item-img">
                    <a href={publicUrl+"assets/img/gallery/portfolio-6thfloor-zone-b-2.png"} data-rel="lightcase:myCollection">
                        <img src={publicUrl+"assets/img/gallery/portfolio-6thfloor-zone-b-2.png"} alt="6th-floor-zone-b" />
                        <span className="ltn__gallery-action-icon">
                        <i className="fas fa-search" />
                        </span>
                    </a>
                    </div>
                    <div className="ltn__gallery-item-info">
                        <h4 className="go-top">6th Floor Zone B</h4>
                        <p>Inside Room with Green View</p>
                    </div>
                </div>
            </div>
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
                <div className="ltn__gallery-item-inner">
                    <div className="ltn__gallery-item-img">
                    <a href={publicUrl+"assets/img/gallery/portfolio-6thfloor-zone-b-3.png"} data-rel="lightcase:myCollection">
                        <img src={publicUrl+"assets/img/gallery/portfolio-6thfloor-zone-b-3.png"} alt="6th-floor-zone-b" />
                        <span className="ltn__gallery-action-icon">
                        <i className="fas fa-search" />
                        </span>
                    </a>
                    </div>
                    <div className="ltn__gallery-item-info">
                        <h4 className="go-top">6th Floor Zone B</h4>
                        <p>Inside Room View and Balcony Facilities</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SixthFloor
