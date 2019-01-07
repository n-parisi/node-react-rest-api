<h1>node-react-rest-api</h1>

A JavaScript implementation of a REST service that supports CRUD operations on a simple arbitrary JSON object. Back-end written with Node.js utilizing the Express framework and Mongoose library. Front-end written with React. Created for demonstration purposes.

<h2>back-end</h2>

The back end creates a REST service for creating, reading, updating, and deleting a simple JSON object - User. Each User object is intended to represent a hypothetical user of some website. User is defined as follows: 

```
var UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  },
  subscription: {
    type: String,
    enum: ["Silver", "Gold", "Platinum"],
    default: "Silver"
  }
});
```

* username: this user's account name
* birthday: user's birthday (required for sign up)
* subscription: account level for some site feature subscription (Silver, Gold, or Platinum)

The application exposes several routes for performing CRUD operations on a User object. For update and delete, authentication is required and supported by JSONWebToken library. A JSON Web Token is generated when a new User is created, and this same token must be provided in the HTTP request header as `x-access-token` in order to perform those operations. The routes defined are as follows: 

All HTTP requests must contain in the header ```Content-Type``` equals `application/x-www-form-urlencoded`.

```
/users
GET     returns a JSON response with list of all users
POST    create a new user and return id and auth code
```

When creating a new user, JSON request body should look like:

```
{
  username : "testuser"
  birthday : "01-01-1980"
  subscription : "Gold"
}
```

On successful user creation JSON response looks like:

```
{
  userId: "foobar123",
  authToken: "foo.bar.123"
}
```

```
/users/{userId}
GET     returns JSON body of User object with userId
PUT     find User with userId and replace with User in request body JSON
DELETE  delete user with userId
```

For PUT and DELETE the `authToken` must be provided in HTTP request header as `x-access-token`. 

<h2>front-end</h2>

The front end provides a single page web application with a few UI elements for interacting with the REST service. It was written in React to practice and demonstrate fullstack JavaScript development. Currently, there are UI elements for viewing all users, creating a new user, and getting more in depth informtion on a single user. Updating and deleting users will come shortly. 

This front end uses no CSS and is only intended to be an extremely basic example of how a front end written in JavaScript would interact with a REST service.

<h2>Database</h2>

This example requires a local MongoDB Database instance to be running. TODO: make path to database configurable. 

<h2>Comments</h2>
To run this example locally simply run `npm install` and `npm start` from the root directory. This is intended to be a basic example of a REST API service that permits CRUD operations on a simple JSON object. While the User object on its own is not very useful, the project organization attempts to allow for easy extension for any kind of JSON object. The usage of Express greatly simplfifies the process of hosting a web server and setting up routes. Mongoose simplifies Database operations, and the usage of Mongoose schemas  includes automatic ID generation - resulting in User IDs that are not sequential or easily guessable. 

</br>The inclusion of the JSONWebToken library allows for establishing a method of authetnicating the users of the API. When a new User object is created and added to the Database, an authentication token is generated. Theoretically this would be safeguard against users who were not the account creator from deleting or modifying a User. 


