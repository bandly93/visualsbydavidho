import express from 'express';
import morgan from 'morgan';

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.listen(port,()=>{
	console.log(`Server is listening on port : ${port}`);
});


