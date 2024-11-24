import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './Models/DB.js';
import userRoutes from './Routes/UserRoutes.js';




const PORT = process.env.PORT || 8000;
const app = express();
await connectDB();
app.use(express.json());
app.use(cors());

app.use('/api/user',userRoutes)
app.get('/',(req,res)=>res.send("API Working"));
app.listen(PORT,()=>console.log(`Server Running On PORT ${PORT}`));

