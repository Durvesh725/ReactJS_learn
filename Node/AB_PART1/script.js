const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static('./public'));

app.get('/', (req, res) => {
    res.render('index')
})

function errorHandler(req, res, next, err){
    if(res.HeadersSent){
        return next(err)
    }
    res.status(500);
    res.render('error', {"error" : err})
}

app.listen(3000)