import React from 'react'
import PropTypes from 'prop-types'

const SosMed = ({link, icon}) => {
    return (
        <a className="btn btn-success btn-lg btn-icon" href={link} rel="tooltip" title=""
        data-original-title="Mail me"><i className={icon}></i>
        </a>
    )
}

SosMed.propTypes = {
    link: PropTypes.string,
    icon: PropTypes.string,
}

export default SosMed
