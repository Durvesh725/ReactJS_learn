const express = require('express')
const app = express()

// Middleware: always executes before a route is hit
app.use((req, res, next) => {
    console.log("Hello from middleware")
    next()
    // if we dont use next, the incoming req is jammed, therefore to forward rquest to the intended recipent,
    //  we use middleware
})


app.get('/', function(req, res){
    res.send("hello from");
})

app.get('/profile', function(req, res){
    res.send("hello from profile");
})

// now, when server gets the req for profile route, it executes it,
// now if you want to execute something before the 'profile' route is hit, then we use use() method

app.listen(3000);