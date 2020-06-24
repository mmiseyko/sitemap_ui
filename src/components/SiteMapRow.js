import React from 'react'
import PropTypes from 'prop-types'
import Link from './Link'
import SiteMapRows from './SiteMapRows'

class SiteMapRow extends React.Component {
  render() {
    const { link_id, name, full_path, children } = this.props.link;

    return (
      <li>
        <Link name={name} id={link_id} path={full_path} />
        <SiteMapRows links={children || []} />
      </li>
    );
  }
}

SiteMapRow.propTypes = {
  link: PropTypes.object.isRequired,
}

export default SiteMapRow


