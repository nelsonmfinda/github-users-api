[![Build Status][build-shield]][build-url]
[![Contributors][contributors-shield]][contributors-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Maintainability](https://api.codeclimate.com/v1/badges/a464fa475215919668fc/maintainability)](https://codeclimate.com/github/nelsonmfinda/github-users-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/a464fa475215919668fc/test_coverage)](https://codeclimate.com/github/nelsonmfinda/github-users-api/test_coverage)

# Challenge [BACK-END]

Shaw and Partners back-end [challenge](https://shawandpartners.com/full-back-front-test/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Node ~> v8.10.0
- NPM ~> v6.10.0

Follow this link to [install node in your machine](https://nodejs.org/en/download/)

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```sh
npm install
```

And run project

```sh
npm run dev
```

Now running on your local machine <http://localhost:3000/api/>

## Running the tests

```sh
npm run test
```

### And coding style tests

Explain what these tests test and why

```sh
npm run lint
```

## Using Docker

```sh
docker pull nelsonmfinda/github-users-api
```

- Run the image

```sh
docker run -p 3000:3000 -d nelsonmfinda/github-users-api
```

- Print the output of your app:

  1. Get container ID

  ```sh
  docker ps
  ```

  2. Print app output

  ```sh
  docker logs <container id>
  ```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* Express - The web framework used
* Axios - Promise based HTTP client

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://bitbucket.org/nelsonmfinda/shawandpartners-test/tags).

## Author(s)

***Nelson Mfinda** - [Nelson Mfinda](https://bitbucket.org/nelsonmfinda)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[build-shield]: https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square
[build-url]: https://travis-ci.com/nelsonmfinda/github-users-api.svg?branch=master
[contributors-shield]: https://img.shields.io/badge/contributors-1-orange.svg?style=flat-square
[contributors-url]: https://github.com/nelsonmfinda/github-users-api/graphs/contributors
[license-shield]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[license-url]: https://choosealicense.com/licenses/mit
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/nelsonmfinda
[product-screenshot]: https://raw.githubusercontent.com/nelsonmfinda/github-users-api/master/screenshot.png
