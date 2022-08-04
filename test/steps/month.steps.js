const assert = require('assert')
const { When, Then } = require('@cucumber/cucumber')
const { Greeter } = require('../../src')
const axios = require('axios').default;

When('the greeter says hello', async () => {
    const response = await axios.get('http://localhost:4000');
      
  this.answer = response;
});

Then('I should have heard {string}', (expectedResponse) => {
  assert.equal(this.answer, expectedResponse)
});