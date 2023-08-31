# Movee

## Overview

This app is a simple SPA to help users search the [OMDb API](https://www.omdbapi.com/) for movie
details. A user can search by combination of movie title, year the movie was released and the format
for the movie plot. Amongst these three parameters, kindly note that only the title is mandatory.

## Project Architecture

This project is built on [React](https://react.dev/) with [Typescript](https://www.typescriptlang.org/) using some components of [Radix UI](https://www.radix-ui.com/) to compose components.
This project also uses [Redux](https://redux.js.org/) for state management. I have also made use of
[Sentry](https://docs.sentry.io/) for error reporting and monitoring in this project.
Everything else is from the usual [React](https://react.dev/) architecture.

## NB:

Please note that, this was a fairly simple app which could have been implemented without Redux.
However, the intention was to treat this project with extensibility in mind so it was structured with all best practices I could possibly think of. This is not to say that this project doesn't need improvement. Also note that sometimes no matter what you type, the API returns with same response
data. I learned there was a limit of calls for non-patron users(I don't know how true this is).
Please feel free to point out if I'm using it wrongly. I will appreciate.

## How to setup and run this project

First things first, you'll need to have `git` installed on your system. You'll also need to install `nodejs` on your system.
Please refer to the documentation of the above mentioned tools on how to install them on your system(platform).

After successfully installing all the required tools, run `npm i` to install all the dependecies of the project specified in the `package.json` file. Then finally run `npm start` to start the project.

When want to build the project instead, run `npm build`

## Unit Tests

I have included 2 unit tests in this project to test the state of the app when the API call
was successfull and when it isn't. To view test results, run `npm start`
