import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SiteMapRows from './SiteMapRows'
import { getSiteMapAction } from '../actions/siteMapActions';

export class SiteMap extends React.Component {
  componentDidMount() {
    this.props.fetchSiteMap();
  }

  render() {
    const { loading, error } = this.props
    if (error) { return 'There was an error fetching sitemap' }

    return (
      loading ? 'Loading' : <SiteMapRows links={this.props.siteMap} />
    );
  }
}

SiteMap.propTypes = {
  siteMap: PropTypes.array.isRequired,
  fetchSiteMap: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  siteMap: state.siteMapState.siteMap,
  loading: state.siteMapState.loading,
  error: state.siteMapState.error
});

const mapDispatchToProps = dispatch => ({
  fetchSiteMap: () => dispatch(getSiteMapAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteMap);
