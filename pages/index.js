import "babel-polyfill";
import React from 'react';
import { connect } from 'react-redux';
import { Helmet } from "react-helmet";
import moment from 'moment';
import Router, { withRouter } from 'next/router';
// import { waitFor } from 'redux-wait-for-ssr';

import Head from 'next/head';
import Header from '~/components/Header';
import Feature from '~/components/Feature';
import Watchlist from '~/components/Watchlist';
import Footer from '~/components/Footer';



class Index extends React.Component {

  static async getInitialProps(props) {
    const {
      ctx:
          { req,
            // store,
            isServer,
            // query,
          }
    } = props;
    
    return {
      //authenticate

      isServer,
      // isMobile,
    };
  }

  constructor() {
    super();
    this.state = {
      isMobile: false,
    };
  }


  render() {
    

    const { isMobile } = this.state;

    // const isLoaded = !japanHoliday.isFetching && japanHoliday.defaultDate.checkIn;
    return (
      <React.Fragment>
        <Header />
        <Feature />
        <Watchlist />
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Index));
