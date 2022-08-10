const env = require("dotenv");
const dotenvExpand = require("dotenv-expand");

const envConfig = env.config();
dotenvExpand.expand(envConfig);

console.log(process.env.API_BASE);

const { When, Then, After, Before } = require("@cucumber/cucumber");
const assert = require("assert");
// const { ChildProcess } = require("child_process");
const axios = require("axios").default;
var fork = require('child_process').fork;

// let child;

// //

When("the user makes a call to Api to get a list of months for half a year", async () => {
  const response = await axios.get("http://localhost:4000/");
  
  const data = JSON.parse(response.data);

  this.answer = data.length / 2 || 0;
});

Then("I should get back {float} elements", (expectedResponse) => {
  assert.equal(this.answer, expectedResponse);
});

When("the user makes a call to Api to get a list of months", async () => {
  const response = await axios.get("http://localhost:4000/");
  
  const data = JSON.parse(response.data);

  this.totalMonths = data.length || 0;
});

Then("Total list of months should be {float}", (expectedAnswer) => {
  assert.equal(this.totalMonths, expectedAnswer);
})

