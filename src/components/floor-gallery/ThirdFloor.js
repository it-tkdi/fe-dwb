import React from 'react'

const ThirdFloor = () => {
    let publicUrl = process.env.PUBLIC_URL+'/';

    return (
        <div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---">
            <div className="ltn__gallery-sizer col-1" />
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
            <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                <a href={publicUrl+"assets/img/gallery/portfolio-3thfloor-zone-a.png"} data-rel="lightcase:myCollection" data-bs-lc-caption="Your caption Here">
                    <img src={publicUrl+"assets/img/gallery/portfolio-3thfloor-zone-a.png"} alt="3rd-floor-zone-a" />
                    <span className="ltn__gallery-action-icon">
                    <i className="fas fa-search" />
                    </span>
                </a>
                </div>
                <div className="ltn__gallery-item-info">
                    <h4 className="go-top">3rd Floor Zone A</h4>
                    <p>East Direction, Typical Semi Fitted Out</p>
                </div>
            </div>
            </div>
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12">
            <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                <a href={publicUrl+"assets/img/gallery/portfolio-3thfloor-zone-a-2.png"} data-rel="lightcase:myCollection">
                    <img src={publicUrl+"assets/img/gallery/portfolio-3thfloor-zone-a-2.png"} alt="3rd-floor-zone-a" />
                    <span className="ltn__gallery-action-icon">
                    <i className="fas fa-search" />
                    </span>
                </a>
                </div>
                <div className="ltn__gallery-item-info">
                    <h4 className="go-top">3rd Floor Zone A</h4>
                    <p>Hall Room</p>
                </div>
            </div>
            </div>
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
            <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                <a href={publicUrl+"assets/img/gallery/portfolio-3thfloor-zone-a-3.png"} data-rel="lightcase:myCollection">
                    <img src={publicUrl+"assets/img/gallery/portfolio-3thfloor-zone-a-3.png"} alt="3rd-floor-zone-a" />
                    <span className="ltn__gallery-action-icon">
                    <i className="fas fa-search" />
                    </span>
                </a>
                </div>
                <div className="ltn__gallery-item-info">
                    <h4 className="go-top">3rd Floor Zone A</h4>
                    <p>The Cubical Rooms With City View</p>
                </div>
            </div>
            </div>
        </div>
    )
}

export default ThirdFloor
