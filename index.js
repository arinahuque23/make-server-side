const express = require('express');
const cors = require('cors');
const app =express();
const port = process.env.PORT || 5200;

//midle-ware
app.use(cors());
app.use(express.json());

const users =[
    { id: 1, name:'rafa', email: 'rafa@gmail.com' },
    { id: 2, name:'munmun', email: 'munmun@gmail.com' },
    { id: 3, name:'resmi', email: 'resmi@gmail.com' },
    { id: 4, name:'afia', email: 'afia@gmail.com' }

]

app.get('/', (req, res)=>{
    res.send('user is here!!')

});

app.get('/users', (req, res)=>{
    res.send(users);
})

app.post('/users', (req,res) =>{
    console.log('post api hitting')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length +1;
    users.push(newUser);
    res.send(newUser);
})

app.listen(port, () =>{
    console.log(`Server is running on PORT: ${port}`)
})