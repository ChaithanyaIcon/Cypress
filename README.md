# Cypress Test Automation

This project will consist of all the information, packages and test files required to run the automated integration test suites for Health Director. The aim is to use the Cypress framework to create an automation test suite that will cover the bulk of the acceptance tests needed for release with e2e test to follow in time.

This is Chai's experimental repository.

### Getting Started

Upon cloning this repo, open a CMD line inside the containing folder and run

```
npm install
```

This should update and replace any of the vendors needed to run this.

## Running the Cypress GUI

For testing individual components, debugging, or writing tests, the provided GUI that comes with Cypress is easier to use albeit slower. This will allow you access to a DOM snapshots for each test step as well as the ability to directly interact with each snapshot with dev tools. The ENV flag must be passed in as shown below or else it will not open correctly and tests will not run.

```
npx cypress open
```

## Running Cypress Headless

For full test runs or running in CI, we append the correct cypress command above with the run command. This will instead run the test headlessly on electron leading to a much faster run as well as video capture for each spec file.

```
npx cypress run
npx cypress run --env configFile=qa --spec 'cypress/integration/VisualTesting/**'
```

### Additional Flags

The additional flags found in the Cypress GUI section will also work here, as well as a new one:


More flags and information can be found in the [Cypress.io Guides](https://docs.cypress.io/guides/guides/command-line.html#cypress-run)

### Recording

To record the results to the Cypress dashboard we need to add the --record tag to the above commands along with the --key. This can only be used in conjunction with the run tag.

```
npx cypress run --record --key 70b0f6d9-9293-401e-9624-8c350b34e795
```

## Common Runs

Run Visual UI tests against QA

```
npx cypress run --env configFile=qa --spec 'cypress/integration/VisualTesting/**'
```

## Built With

- [Cypress.io](https://www.cypress.io/) - The Cypress framework

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/epicdigital/cypress-automation/tags).

## Authors

- **Bailey Nahi** - (https://github.com/baileynahi)