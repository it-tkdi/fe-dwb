import React, { Component } from 'react'

export class FabWA extends Component {
    render() {
    let publicUrl = process.env.PUBLIC_URL+'/'

        return (
            <div className="float__wa">
                <a href="https://api.whatsapp.com/send?phone=6281717710888" target="_blank" rel="noopener noreferrer">
                    <img src={publicUrl+"assets/img/icons/whatsapp.png"} alt="whatsapp-logo" />
                </a>
            </div>
        )
    }
}

export default FabWA
