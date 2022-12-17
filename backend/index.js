import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch'


// console.log(MongoURI);
const port = 5000
const app = express();
app.use(cors());
app.use(express.json());

const consume  ='https://jsonplaceholder.typicode.com/users'


var json;


app.use('/', async (req, res) => {
    
const response = await fetch(consume, {
    method:'GET',

})

json = await response.json();

res.status(200).send(json)

})
// console.log(json);

app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})

