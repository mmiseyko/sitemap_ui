import React from 'react'
import PropTypes from 'prop-types'

class Link extends React.Component {
  render() {
    const { name, id, path } = this.props;

    return (<a href={path} id={id}>{name}</a>)
  }
}

Link.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default Link
