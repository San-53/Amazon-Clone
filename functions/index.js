const functions = require("firebase-functions");
const express = require ("express");
const cors = require("cors")
const stripe = require("stripe")('sk_test_51KVrYoSDtij3xFbwTaulvyvWbTUnnynfpHxWHN9nn7IRKgG84X0xsK4FJkcglvIOoVSFNll4xdaNLRQFRxT2Fm7E00Q2olWtDr')

//API 



//APP config
const app=express();

//Middleware
app.use(cors({origin:true}))
app.use(express.json())

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });



//OK 

response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//LIsten command

exports.api = functions.https.onRequest(app);


// http://localhost:5001/challenge-7d9e7/us-central1/api