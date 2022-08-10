const env = require("dotenv");
const dotenvExpand = require("dotenv-expand");

const envConfig = env.config();
dotenvExpand.expand(envConfig);

console.log(process.env.API_BASE);

const { When, Then, After, Before } = require("@cucumber/cucumber");
const assert = require("assert");
const axios = require("axios").default;

When("we I call the get member api using id {string}", async (id) => {
  const url = `${process.env.API_BASE}/${id}`;

  console.log("url", url);

  const response = await axios.get(url);

  console.log(response.data);

  const data = response.data;

  this.getMember = data;

  console.log("email: ", this.getMember.email);
});

Then("the user account email should be {string}", (expectedResponse) => {
  assert.equal(this.getMember.email, expectedResponse);
});

When("I want to create a new Member", async (dataTable) => {
  const url = `${process.env.CDS2_API_GET_APP_CONFIG}`;
  const body = dataTable.rowsHash();

  const response = await axios.post(
    `https://pl072v3p94.execute-api.us-east-1.amazonaws.com/alpha/members/create`,
    body,
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": `BSxnuYtfLJ1Q4nqgaVxhl2zyXy7ZzBya5k6NFHTl`,
      },
    }
  );

  const data = response.data;

  this.createdMemberData = data;
});

Then("the ko Id should be {string}", (expectedResponse) => {
  assert.equal(this.createdMemberData.kocid, expectedResponse);
});
