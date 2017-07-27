import React, { Component } from 'react';
import AnyChart from './AnyChart';
import $ from 'jquery';

import './App.css';


class Map extends Component {
  state = {
    filterByPopulation: 500000,
    data: null,
    filteredData: null,
    errorMessage: ''
  }

  componentWillMount() {
    // this.anychartLoader();
    let self = this;
    if(this.state.data === null) {
      $.getJSON('./citys.json').fail(data => console.log(data)).done(function(data) {
        self.setState({data: data});
      });
    }

  }

  handleChange = (e) => {
    const options = {
      ENTER_CODE: 13,
      MIN_POPULATION: 300000,
    }

    let count = parseInt(e.target.value.replace(/ /ig, ''));

    if(e.keyCode === options.ENTER_CODE) {
      if(count > options.MIN_POPULATION) {
        this.setState({ filteredData: this.state.data.filter((item, index) => item.value >= count), errorMessage: '' });
      } else {
        this.setState({ errorMessage: ` Enter population biger then ${options.MIN_POPULATION}` });
      }
    }
  }

  render() {
    // let data = this.state.data ? this.state.data.filter(item => item >= 500000) : [];
    return (
        <div className="forMap">
          <h3>World population map</h3>
          <div id="container" className="map">
            <p className="textForMap">Population</p>
            <label><input className="inputForMap" onKeyDown={this.handleChange} type="text" name=""/>{this.state.errorMessage}</label>
            {
              this.state.data ? <AnyChart data={this.state.filteredData || this.state.data.filter(item => item.value >= 500000) }/> : null
            }
          </div>
        </div>
      );
    }

}

export default Map;
