import React from 'react'
import PropTypes from 'prop-types'
import SiteMapRow from './SiteMapRow'

class SiteMapRows extends React.Component {
  render() {
    const { links } = this.props;
    const listItems = links.map((link) =>
      <SiteMapRow key={link.link_id} link={link} />
    )
    return (
      listItems.length > 0 &&
      <ul>
        {listItems}
      </ul>
    );
  }
}

SiteMapRows.propTypes = {
  links: PropTypes.array.isRequired
}

export default SiteMapRows


