import React from 'react'

const FirstFloor = () => {
    let publicUrl = process.env.PUBLIC_URL+'/';

    return (
        <div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---">
            <div className="ltn__gallery-sizer col-1" />
            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
                <div className="ltn__gallery-item-inner">
                    <div className="ltn__gallery-item-img">
                    <a href={publicUrl+"assets/img/gallery/portfolio-floor-3.png"} data-rel="lightcase:myCollection">
                        <img src={publicUrl+"assets/img/gallery/portfolio-floor-3.png"} alt="1st-floor-zone-a" />
                        <span className="ltn__gallery-action-icon">
                        <i className="fas fa-search" />
                        </span>
                    </a>
                    </div>
                    <div className="ltn__gallery-item-info">
                        <h4 className="go-top">1st Floor Zone A</h4>
                        <p>East Direction, City View Typical Bare Floor</p>
                    </div>
                </div>
            </div>
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
            <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                <a href={publicUrl+"assets/img/gallery/portfolio-zone-b-1.png"} data-rel="lightcase:myCollection">
                    <img src={publicUrl+"assets/img/gallery/portfolio-zone-b-1.png"} alt="1st-floor-zone-b" />
                    <span className="ltn__gallery-action-icon">
                    <i className="fas fa-search" />
                    </span>
                </a>
                </div>
                <div className="ltn__gallery-item-info">
                    <h4 className="go-top">1st Floor Zone B</h4>
                    <p>West Direction, Green View, Typical Semi Fitted Out</p>
                </div>
            </div>
            </div>
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
            <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                <a href={publicUrl+"assets/img/gallery/portfolio-zone-b-2.png"} data-rel="lightcase:myCollection">
                    <img src={publicUrl+"assets/img/gallery/portfolio-zone-b-2.png"} alt="1st-floor-zone-b" />
                    <span className="ltn__gallery-action-icon">
                    <i className="fas fa-search" />
                    </span>
                </a>
                </div>
                <div className="ltn__gallery-item-info">
                    <h4 className="go-top">1st Floor Zone B</h4>
                    <p>The Rooms with Semi Fitted Out and Nice Green View</p>
                </div>
            </div>
            </div>

            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
            <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                <a href={publicUrl+"assets/img/gallery/portfolio-zone-b-3.png"} data-rel="lightcase:myCollection">
                    <img src={publicUrl+"assets/img/gallery/portfolio-zone-b-3.png"} alt="1st-floor-zone-b" />
                    <span className="ltn__gallery-action-icon">
                    <i className="fas fa-search" />
                    </span>
                </a>
                </div>
                <div className="ltn__gallery-item-info">
                    <h4 className="go-top">1st Floor Zone B</h4>
                    <p>Inside View From the Main Door</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FirstFloor
