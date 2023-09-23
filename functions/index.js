/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");


const functions = require('firebase-functions');
const app = require("express")();

const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore().collection("todos")
//to dos: create Todo
//todo: get Todo


app.get("/todos", function(request, response){
    db.get()
    .then(function(docs){
        let todos = []
        docs.forEach(function(doc){
            todos.push({id: doc.id, description: doc.data().description});
        })
        response.json(todos);
    })
});

app.post("/todos", function(request, response){
    const newTodo = {
        description: request.body.description
    }
    db.add(newTodo)
    .then(function(){
        response.status(200).json(null);
    })
});

exports.api = functions.https.onRequest(app);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
