"use strict"
const express = require("express");
const app = express();

// define endpoint for problem 1 here
// Added a new GET endpoint, /math/circle/:r
app.get("/math/circle/:r", (req, res) => {
  // Get the dynamic route parameter (r) or radius value
  const dynamicrOrRadiusVal = req.params.r;

  // Calculate the area and circumference and fix their values to 2 decimal places
  const areaFromDynamicrRVal = Number((Math.PI * dynamicrOrRadiusVal * dynamicrOrRadiusVal).toFixed(2));
  const circumFerenceFromDynamicrRVal = Number((Math.PI * 2 * dynamicrOrRadiusVal).toFixed(2));

  // respond in JSON with the area and circumference
  res.json({ area: areaFromDynamicrRVal, circumference: circumFerenceFromDynamicrRVal });
});

// define endpoint for problem 2 here
// Added a new GET endpoint, /hello/name
app.get("/hello/name", (req, res) => {
  // a query string is the part in a URL after the question mark (?)
  // So, for example, query string in the URL 'http://localhost:8000/hello/name?first=Eli&last=Cuevas'
  //  is 'first=Eli&last=Cuevas'

  // Get the 'first' query parameter value
  let firstQueryParamVal = req.query.first;
  // Get the 'last' query parameter value
  let lastQueryParamVal = req.query.last;

  // If both query parameters are missing in the request URL
  if (firstQueryParamVal === undefined && lastQueryParamVal === undefined) {
    // return status of 400 with an error message
    res.status(400).json({ error: "Missing Required GET parameters: first, last" });
    return;
  }

  // If 'first' query parameter is missing
  if (firstQueryParamVal === undefined) {
    // return status of 400 with an error message
    res.status(400).json({ error: "Missing Required GET parameters: first" });
    return;
  }

  // If 'last' query parameter is missing
  if (lastQueryParamVal === undefined) {
    // return status of 400 with an error message
    res.status(400).json({ error: "Missing Required GET parameters: last" });
    return;
  }

  // Otherwise, respond in plain text with "Hello firstName lastName"
  res.send(`Hello ${firstQueryParamVal} ${lastQueryParamVal}`);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT)
