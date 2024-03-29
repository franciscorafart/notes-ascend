# Ascend Notes App

## How to Run the App?

1) Run `npm install` on both `./notes-app-client` and `./notes-app-backend` directories.
2) Set up an `.env` file modeled after the `.env.example` and fill in the variables.
3) Start the backend by running `npm run dev` inside the `./notes-app-backend` directory.
4) Start the frontend by running `npm run dev` inside the `./notes-app-client` directory.
5) Manually test the application.
6) Like and subscribe.

## Backend Testing

The tests are implemented using the `jest` and `supertest` libraries. 
The tests are an integration test suite that runs the API endpoints to ensure the correct behavior of the CRUD functionality.

### Setting up the Test Environment

- 1) Create a MongoDB testing database.
Create a MongoDB test DB that is separate from your production DB. You can run it locally, on a container, or on an external MongoDB provider such as `https://www.mongodb.com/`. The important thing is that you get the DB's URI to connect to it.

- 2) Add your testing database URL in the `.env` file as in the example below. Make sure it's different from your production database.

`TEST_URI="Your_mongo_db_url"`

### How to Run the Test Suite

Run `npm run test`.

### How to Add Tests

#### Adding Routes
Whenever a route is added, create a new spec file to test it in the `tests` directory. For example, if your new route is called `users`, then you should make a `users.spec.js` file.

#### Adding Endpoints
If you add an endpoint, make sure you add tests for it in the route's corresponding spec file.

#### Clean Up
If using a common DB shared between developers, ensure that your tests clear up the database after running every time. Use the `afterAll` jest function for this.

### What You Should Test
Every endpoint should be thoroughly tested. Here are things to look for:

1) CRUD Functionality
    - Create endpoints should test the successful creation of new entries.
    - Update should update (only) the specified fields and keep the untouched ones as they are.
    - Delete endpoint tests should delete and ensure the removal of the element from the DB.
    - Get (single element) endpoints should return the correct element.
    - List (get multiple elements) endpoints should return a list of elements or an empty array if nothing is found.

2) Graceful Handling of Errors
    - Create endpoints should gracefully fail if there's an attempt to create an existing unique element.
    - Update should gracefully fail if the element being updated doesn't exist.
    - Delete endpoint should fail gracefully if the element to be removed can't be found.
    - Get (single element) endpoints should fail gracefully if the requested element can't be found.

3) Edge Cases
- Tests should include as many edge cases as possible.
- Tests should handle unexpected payloads gracefully.

## Frontend Testing

### Setting up the Frontend Test Environment

Make sure you have Node.js installed

then:
`npm install --save-dev @testing-library/react @testing-library/jest-dom jest jest-environment-jsdom @babel/preset-env @babel/preset-react`

The file package.json should be extended as follows:
<code>
{
  "scripts": {
    // ...
    "test": "jest"
  }
  // ...
  "jest": {
    "testEnvironment": "jsdom"
  }
}
</code>

We also need the file .babelrc with following content:
<code>
{
  "presets": [
    "@babel/preset-env",
    ["@babel/preset-react", { "runtime": "automatic" }]
  ]
}
</code>

### Writing Test

Create a test directory in your project or alongside your components and name your test files with the .test.js extension. For example, if your component is in src/components/Sidebar.js, create a test file named Sidebar.test.js

### Running Test

Execute the following command:

`npm test`