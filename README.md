# Shopping List App Exercise

## Notes

I've added some notes about this exercise. Instructions on how to run or access this project are found below.

### My Experience doing this Exercise

This was a very interesting and enjoyable challenge as I am primarly a backend developer. I have written web apps before but using server-side rendering such as RoR, Java EE JSP and JSF. I've also worked with Desktop applications in Swing, SWT and JavaFX, so I believe that I have a good grip on asynchronous event systems and improving responsiveness.

Though I've dabbled with AngularJS and React before, Angular 2+ seems to be a very well architectured web framework with a very clear Controller/View model. It was easier to understand and learn than many other web frameworks. I enjoyed the use of TypeScript as it allowed typing which is a breath of fresh air for someone who is used to Strongly-Typed languages.

IDEs such as Visual Code we're not powerful enough and missed many of the auto-completion and refactoring features found in Eclipse and IntelliJ. This is expected due to the nature of the programming and markup languages of dynamic nature.

Most of the learning was done through the official Angular documentation which was very thourough and useful. I did encouter some obscure issues and sometimes StackOverflow threads were useful.

There are some software engineering practises that I've ignored due to time limitations such as security, unit testing and validation.

The application cannot run offline or handle network problems. Some applications like Todoist handle this by using in browser storage.

### Recommendations for the API

The documentation for the Shopping List API does not include example requests or responses like some of the other endpoints. I had to use Postman to manually find out how the endpoints are supposed to used and their responses so I can create DTOs for them.

User selection should not be done via the body of the endpoint. Instead it could be part of the header, ideally a JWT encrypted token. This would allow the use of PUT, DELETE, etc HTTP methods instead of using POST for everything and follow RESTful conventions more closely.

Finally, in order to do batch shopping list operations, I'd recommend a look into the JSON Patch RFC 6092. This would minimize the amount of endpoint calls and enhance responsiveness of the app.

The error reporting on the API is poor often just returning 400 or 500 series errors. I recommend at least showing the Java Exception that caused the failure.

### Performance optimization

I have done a single performance optimization to improve the responsiveness of the app. The model is updated immedeatly even before the server request is made. This gives the impressions that things are happening locally while in the background network requests are being made to persist the changes.

### Application Features

* Built with Angular 6
* User can manually enter ZIP code to identify geographical position

* Add one item to the grocery list at a time.
* Items can checked/crossed-out from the list.
* Items can removed/deleted from the list.
* Under each item, relevant deals are presented to the user.

* Multiple grocery lists can be managed.
* Grocery lists can be added or deleted.

* Uses Shopliftr API to store and retrieve data for persistance.

## Hosted Version

The hosted version of the app can be found by accessing this url: [http://shopping.cdahmedeh.net](http://shopping.cdahmedeh.net)

It running in a docker container that simply runs the Angular CLI command in Alpine Linux. The docker container is hosted on a DigitalOcean VPS Droplet.

## Running the Application

### Via Docker

### Via Angular CLI

Begin by installing node.js and npm on your system via this [website](https://nodejs.org/en/download/) for your operating system. Use the LTS version.

Then using the npm package manager, install the angular CLI
    npm install -g @angular/cli

You can then enter the directory of the project folder. The project can be run with
    ng serve --open

The browser will be automatically be opened to the Angular App on (http://localhost:4200)[http://localhost:4200]




