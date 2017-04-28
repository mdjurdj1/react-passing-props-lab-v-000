import React from 'react';
import { Component } from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

function FruitBasket({filters, handleFilterChange, selectedFilter, fruit}) {
    return (
      <div className="fruit-basket">
        <Filter filters={filters} handleChange={handleFilterChange} />
        <FilteredFruitList fruit={fruit} filter={selectedFilter} />
      </div>
    );
  }

FruitBasket.defaultProps = {
  fruit: '',
  filters: [],
  currentFilter: '',
  updateFilterCallback: []
}
export default FruitBasket;
