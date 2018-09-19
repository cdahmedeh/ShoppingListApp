# Shopping List App Exercise

## My Experience doing this Exercise

I am primarly a backend developer with experience making web apps using REST APIs and Server-Side Rendering. Though I have experience with HTML, CSS and JavaScript, I've only dabbled in JavaScript frameworks like Angular and React. This was my first true foray into these types of frameworks.

Unlike React, it seems that Angular is better organized and more intuitive. The framework ressembles a well architectured MVC design. My favourite part was the use of TypeScript which allows typing in JavaScript, a breath of fresh air for someone who works mainly with strongly typed languages.

I spend about a day learning React and then designed the application following the basic requirements of the project. I had to make some sacrifices due to the short amount of time I had to do this work.

Three major software engineering practises were ignored during this exercise: security, testing and performance. 

The application sends the password over plain-text HTTP, rather than HTTPS. Perhaps a web server like nginx could take care of this caveat.

No unit tests were written for this exercise due to lack of time. However, testing is very important for web apps as their complexity can easily lead to regressions when doing bug fixes or new features.

API calls are done as soon as the user performs the actions which means that API requests stack up quickly and could affect responsiveness. I should have implemented a syncing system that detects when the user is inactive and then send the API calls in a batch. For the Shopliftr API, I would recommend the JSON Patch RFC 6092 which would allow one API call for multiple operations.

I learned alot about modern web applications though I can't say that I'm an expert full-stack developer yet. This has definately taken me out of my comfort zone and I thouroughly enjoyed the challenge. Most of my learning was thanks to the official Angular Documentation which was indispensable to understand how certain components work together.

## Hosted Version

The hosted version of the app can be found by accessing this url: [http://shopping.cdahmedeh.net](http://shopping.cdahmedeh.net)

It running in a docker container that simply runs the Angular CLI command in Alpine Linux. The docker container is hosted on a DigitalOcean VPS Droplet.

## Running the Application

### Via Docker

### Via Angular CLI

Begin by installing node.js and npm on your system via this [website](https://nodejs.org/en/download/) for your operating system. Use the LTS version.

Then using the npm package manager, install the angular CLI
    npm install -g @angular/cli
    npm install --save @angular/material @angular/cdk @angular/animations


You can then enter the directory of the project folder. The project can be run with
    ng serve --open

The browser will be automatically be opened to the Angular App on (http://localhost:4200)[http://localhost:4200]

## Application Features

* Built with Angular 6
* User can manually enter ZIP code to identify geographical position

* Add one item to the grocery list at a time.
* Items can checked/crossed-out from the list.
* Items can removed/deleted from the list.
* Under each item, relevant deals are presented to the user.

* Multiple grocery lists can be managed in the side bar.
* Grocery lists can be added or deleted.

* Uses Shopliftr API to store and retrieve data for persistance.
