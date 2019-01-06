<h1>node-react-rest-api</h1>

A JavaScript implementation of a REST service that supports CRUD operations on a simple arbitrary JSON object. Back-end written with Node.js utilizing the Express framework and Mongoose library. Created for demonstration purposes.

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





