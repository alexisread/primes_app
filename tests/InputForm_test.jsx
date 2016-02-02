import React from 'react';
import {
  renderIntoDocument,
  findRenderedDOMComponentWithClass,
  findRenderedDOMComponentWithTag,
  Simulate
} from 'react-addons-test-utils';
import assert from 'assert';
import InputForm from 'app/components/InputForm.jsx';

describe('InputForm', () => {
  it('renders renderTest', () => {
    const value = 'renderTest';
    const component = renderIntoDocument(
      <InputForm renderTest={value} />
    );

    const valueComponent = findRenderedDOMComponentWithClass(component, 'renderTest');

    assert.equal(valueComponent.textContent, value);
  });

});