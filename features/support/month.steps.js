const { When, Then, After, Before } = require("@cucumber/cucumber");
const assert = require("assert");
const axios = require("axios").default;
var fork = require('child_process').fork;


// Before(() => {
//   const  child = fork('./src/index.mjs');
// });

// After(() => {
//   process.exit();
// });

When("the greeter says hello", async () => {
  const response = await axios.get("http://localhost:4000/");
  
  const data = JSON.parse(response.data);

  this.answer = data.length || 0;
});

Then("I should have heard {string}", (expectedResponse) => {
  assert.equal(this.answer, expectedResponse);
});

When("the user makes a call to Api to get a list of months", async () => {
  const response = await axios.get("http://localhost:4000/");
  
  const data = JSON.parse(response.data);

  this.totalMonths = data.length || 0;
});

Then("I should get an Array with a length of {string}", (expectedAnswer) => {
  assert.equal(this.totalMonths, expectedAnswer);
})
