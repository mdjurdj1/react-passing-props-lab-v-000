import React from 'react';
import { Component } from 'react'
import FruitBasket from './FruitBasket';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
      selectedFilter: null,
      fruit: []
    };

    this.fetchFilters = this.fetchFilters.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentWillMount() {
    this.fetchFilters();
    fetch('/api/fruit')
      .then(res => res.json())
      .then(fruit => this.setState({ fruit: fruit}));
  }

  fetchFilters() {
    fetch('/api/fruit_types')
      .then(res => res.json())
      .then(filters => this.setState({filters: filters}));
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  render() {
    return (
      <FruitBasket
        filters={this.state.filters}
        selectedFilter={this.state.selectedFilter}
        fruit={this.state.fruit}
        updateFilterCallback={this.handleFilterChange}
       />
    );
  }
}
