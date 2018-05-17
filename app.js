const express = require('express');
const app =express();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');


// allow cross-origin requests
app.use(cors());
//connecting to mlab database
mongoose.connect("mongodb://rfrixy:wololo@ds119060.mlab.com:19060/gqlapp");
mongoose.connection.once('open',()=>{
  console.log('connected to database');
});

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:true,
}));

app.listen(4000,()=>{
  console.log('now listening for requests on port 4000');

});
