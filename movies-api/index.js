import dotenv from 'dotenv';
import express from 'express';
import './db';
// other imports
import cors from 'cors';
import moviesRouter from './api/movies';  
//... other imports
import usersRouter from './api/users';
import favoritesRouter from './api/favorites';


import authenticate from './authenticate';




dotenv.config();

const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Error. Here's the details: ${err.stack} `);
};


const app = express();

// Enable CORS for all requests
app.use(cors());


const port = process.env.PORT;

app.use(express.json());

app.use('/api/movies', moviesRouter); 


//Users router
app.use('/api/users', usersRouter);

//Favourites router
app.use('/api/favorites', favoritesRouter);




app.use(errHandler);


app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
