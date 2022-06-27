# TDD and Jest

## About

A very simple CRUD with the intention of starting to practice some of the concepts I've been studying about TDD and Jest.

## Technologies used

 * JavaScript
 * Node.Js
 * MongoDB
 * Bcrypt
 * Jest

## How to use

### Create an user

Send a request to the "/user" end point with the "post" method, passing through the body (email, name, password, password confirmation), and if it goes through the validation step, it will return (errors:null and the registered user).

### Login

Send a request to the "/login" end point with the "post" method, passing through the body (email and password), and if it passes the validation step, it will return (errors:null and user data).

### update

Send a request to the "/user/:id" end point with the "put" method, passing through the body (Field you want to change, and user email for validation, by business rule you cannot change email), and if you pass through the validation step will return (errors:null and the edited user).

### Delete

Send a request to the end point "/user/:id" with method "delete", and if it passes the validation step, it will return (errors:null and message:"User deleted successfully").

### In case of any error

A JSON will be returned with an "errors" key and a value indicating the error to be corrected.
