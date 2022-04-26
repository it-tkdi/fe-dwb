import React from 'react'

const NineTenFloor = () => {
    let publicUrl = process.env.PUBLIC_URL+'/';

    return (
        <div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---">
            <div className="ltn__gallery-sizer col-1" />
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
                <div className="ltn__gallery-item-inner">
                    <div className="ltn__gallery-item-img">
                    <a href={publicUrl+"assets/img/gallery/portfolio-floor.png"} data-rel="lightcase:myCollection">
                        <img src={publicUrl+"assets/img/gallery/portfolio-floor.png"} alt="9-10th-floor-zone-a" />
                        <span className="ltn__gallery-action-icon">
                        <i className="fas fa-search" />
                        </span>
                    </a>
                    </div>
                    <div className="ltn__gallery-item-info">
                        <h4 className="go-top">9-10th Floor Zone A</h4>
                        <p>East Direction, Typical Bare Floor</p>
                    </div>
                </div>
            </div>
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
                <div className="ltn__gallery-item-inner">
                    <div className="ltn__gallery-item-img">
                    <a href={publicUrl+"assets/img/gallery/portfolio-floor-2.png"} data-rel="lightcase:myCollection">
                        <img src={publicUrl+"assets/img/gallery/portfolio-floor-2.png"} alt="9-10th-floor-zone-b" />
                        <span className="ltn__gallery-action-icon">
                        <i className="fas fa-search" />
                        </span>
                    </a>
                    </div>
                    <div className="ltn__gallery-item-info">
                        <h4 className="go-top">9-10th Floor Zone B</h4>
                        <p>West Direction Typical Bare Floor</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NineTenFloor
