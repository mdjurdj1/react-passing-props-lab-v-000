import React from 'react';
import { Component } from 'react';

function FilteredFruitList({fruit, filter}) {
    const fruitList = !filter ?  fruit : fruit.filter(i => i.fruit_type == filter);

    return (
      <ul className="fruit-list">
        {fruitList.map((fruit, idx) => <li key={idx}>{fruit.char}</li>)}
      </ul>
    );
  };

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: '',
}
export default FilteredFruitList;
