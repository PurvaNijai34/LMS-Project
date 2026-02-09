// import express from 'express'
// import cors from 'cors'
// import 'dotenv/config'
// import connectDb from './config/mongodb.js'
// import { clerkWebhooks } from './controllers/webhooks.js'



// // Initilaize Express
// const app = express()

// // Connect to Db
// await connectDb()

// // middleware
// app.use(cors())

// // route
// app.get('/',(req, res)=> res.send("Api working") )
// app.post('/clerk',express.json(),clerkWebhooks)


// // PORT
// const PORT = process.env.PORT || 5000


// app.listen(PORT, ()=>{
//     console.log(`Server is running on port ${PORT}`);
    
// })

// export default app;


import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDb from './config/mongodb.js';
import { clerkWebhooks } from './controllers/webhooks.js';

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect DB
await connectDb();

// Routes
app.get('/', (req, res) => res.send("API working"));
app.post('/clerk', clerkWebhooks);

// ❌ NO app.listen() in Vercel

export default app;
