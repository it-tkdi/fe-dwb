import React from 'react'

const GroundFloor = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'

    return (
        <div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---">
            <div className="ltn__gallery-sizer col-1" />
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
            <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                <a href={publicUrl+"assets/img/gallery/portfolio-lobby-receptionist.png"} data-rel="lightcase:myCollection">
                    <img src={publicUrl+"assets/img/gallery/portfolio-lobby-receptionist.png"} alt="lobby-receptionist" />
                    <span className="ltn__gallery-action-icon">
                    <i className="fas fa-search" />
                    </span>
                </a>
                </div>
                <div className="ltn__gallery-item-info">
                    <h4 className="go-top">Ground Floor</h4>
                    <p>Lobby & Receptionist</p>
                </div>
            </div>
            </div>
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
            <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                <a href={publicUrl+"assets/img/gallery/portfolio-lobby-3.png"} data-rel="lightcase:myCollection">
                    <img src={publicUrl+"assets/img/gallery/portfolio-lobby-3.png"} alt="ground-floor" />
                    <span className="ltn__gallery-action-icon">
                    <i className="fas fa-search" />
                    </span>
                </a>
                </div>
                <div className="ltn__gallery-item-info">
                    <h4 className="go-top">Ground Floor</h4>
                    <p>Available for Mini Market & Coffee Shop</p>
                </div>
            </div>
            </div>
            {/* gallery-item */}
            <div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
            <div className="ltn__gallery-item-inner">
                <div className="ltn__gallery-item-img">
                <a href={publicUrl+"assets/img/gallery/portfolio-lobby-1.png"} data-rel="lightcase:myCollection">
                    <img src={publicUrl+"assets/img/gallery/portfolio-lobby-1.png"} alt="ground-floor" />
                    <span className="ltn__gallery-action-icon">
                    <i className="fas fa-search" />
                    </span>
                </a>
                </div>
                <div className="ltn__gallery-item-info">
                    <h4 className="go-top">Ground Floor</h4>
                    <p>Available for Mini Market & Coffee Shop</p>
                </div>
            </div>
            </div>
            </div>
    )
}

export default GroundFloor
