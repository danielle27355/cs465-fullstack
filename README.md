
# CS 465 Full Stack Development – Travlr Getaways

## Project Overview

In this course, I created a full stack web application called Travlr Getaways. The application includes a customer-facing travel website and an administrative application used to manage trip information. Throughout the project, I worked with several technologies, including Express, JavaScript, Angular, MongoDB, and Node.js. I also added security features to protect the administrative side of the application.

## Architecture

In this project, I used Express HTML, JavaScript, and Angular to create different parts of the application. Express was used with Handlebars templates to display the customer-facing website. JavaScript helped add functionality and allowed different parts of the application to work together. The Angular SPA was used for the administrative side of the website. Unlike the Express pages, Angular can update information without reloading the entire page. Angular also uses reusable components, which makes the application easier to organize and update.

The backend used MongoDB because it allows information to be stored in flexible documents instead of tables. This was useful for the Travlr Getaways project because each trip had different information, such as a name, location, price, and description. MongoDB also works well with JavaScript and Node.js, making it easier to connect the database to the rest of the application. It can also be easier to make changes to the data structure as the application grows.

## Functionality

JavaScript is a programming language used to add functionality to websites, while JSON is a format used to organize and exchange data. JSON uses key-value pairs to store information in a way that different parts of an application can understand. In this project, JSON was used to transfer trip information between the backend API and the Angular application. This allowed the frontend to display information stored in MongoDB without connecting directly to the database.

During this project, I made changes to organize the code and improve how different parts of the application worked together. For example, I used Angular components to display trip information and services to retrieve data from the backend. This helped keep the code organized instead of putting everything in one place. Reusable UI components are helpful because they reduce repeated code and make changes easier. They also help keep the appearance and functionality of the application consistent.

## Testing

API testing helps make sure the frontend and backend communicate correctly. An endpoint is a URL that allows an application to request or change information. Different HTTP methods are used for different tasks. GET retrieves information, POST adds information, PUT updates information, and DELETE removes information. In this project, these methods helped manage trip information.

Adding security makes testing more complicated because some features can only be accessed by authorized users. In the Travlr Getaways application, I worked with Passport and JSON Web Tokens (JWT) to add authentication to the administrative side. Testing secured endpoints involves checking that users with valid tokens can access protected features while users without valid tokens cannot. It is also important to test incorrect login information and missing tokens to make sure the security features work correctly.

## Reflection

This course helped me better understand how different parts of a full stack application work together. I gained more experience with JavaScript, Express, Angular, MongoDB, and Node.js. I also learned more about working with APIs, databases, authentication, and reusable components. Completing the Travlr Getaways project helped me improve my problem-solving skills and become more comfortable working with different technologies.

My career goals include working in data analytics and possibly moving into data engineering in the future. Even though this course focused on full stack development, many of the skills I learned can be useful in those fields. Understanding databases, APIs, and JSON can help me work with data and understand how information moves between systems. Overall, this course helped me build more technical skills and gave me another project to include in my portfolio.
