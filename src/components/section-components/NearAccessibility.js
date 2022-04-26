import React, { Component } from 'react'

export class NearAccessibility extends Component {
    
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let CustomClass = this.props.CustomClass ? this.props.CustomClass : ''

        return (
            <div className={"ltn__apartments-plan-area pt-115--- pb-70 "+CustomClass}>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title-area ltn__section-title-2--- text-center">
                                <h6 className="section-subtitle section-subtitle-2">Near Accessibility</h6>
                            </div>
                            <img src={publicUrl+"assets/img/others/map.png"} alt="gambar" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NearAccessibility
