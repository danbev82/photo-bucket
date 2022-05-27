import React, { Component } from 'react'
import images from './Photos'

import Lightroom from 'react-lightbox-gallery'

export default class Gallery extends Component {
    render() {

        var settings = {
            columnCount: {
                default: 5,
                mobile: 2,
                tab: 4
            },
            mode: 'dark'
        }
        return (
            <div>
                <Lightroom images={images} settings={settings} className="images"/>
            </div>
        )
    }
}