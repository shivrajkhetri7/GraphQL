const express = require('express');
const dotenv = require("dotenv").config();
const { ApolloServer } = require('apollo-server-express');
const { dbConnection } = require('./dbConfig/db.config');
const schema = require("./graphql/Schema");
const resolvers = require("./graphql/Resolvers");

const app = express();
const PORT = process.env.PORT || 8000;

// Create an instance of ApolloServer
const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
});

// Connect to the database and then start the server
dbConnection
    .then(async () => {
        console.log("DB connection successful!");

        // Start the Apollo Server
        await server.start();

        // Apply middleware to the Express app
        server.applyMiddleware({ app });

        // Start the Express server
        app.listen(PORT, () => {
            console.log(`Server Running On http://localhost:${PORT}${server.graphqlPath}`);
        });
    })
    .catch((error) => {
        console.error("Error while connecting to DB:", error.message);
    });
