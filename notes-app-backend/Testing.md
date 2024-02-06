# Testing

The integration test are done with `supertest`

## Set up env

- Add your test database url in the `.env` file using the key 'TEST_URI'. Ensure that it is different from your production database URL

*This separation is important to prevent unintentional data modifications or deletions during testing

`TEST_URI="Your_url"`

# How to run a test

When running a test, in your terminal...

Run `npm run test`

The terminal will indicate whether each test has passed or failed

## How to add tests

When adding a new endpoint to your API, a new test will need to be created with the corresponding resource path. This ensures that your tests accurately reflect the functionality of the newly added API endpoint.

When adding a new router, it is important to create a new controller for the new router and all its endpoints. Additionally, you will need to create a new .spec.js file in your testing environment.

