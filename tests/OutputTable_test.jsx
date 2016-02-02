import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils';
import assert from 'assert';
import multiplyInto2dArray from './../app/libs/multiplyInto2dArray.js';
import OutputTable from 'app/components/OutputTable.jsx';

describe('OutputTable', () => {
  it('renders renderTest', () => {
    const value = 'renderTest';
    const data = multiplyInto2dArray([1,2,3]);
    const component = renderIntoDocument(
      <OutputTable renderTest={value} data={data} />
    );

    const valueComponent = findRenderedDOMComponentWithClass(component, 'renderTest');

    assert.equal(valueComponent.textContent, value + '123246369');
  });

});