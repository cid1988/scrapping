const express = require('express');
const path = require('path');
const app = express();
app.use(express.static('./dist/scrapping'));
app.get('/*', function(req,res){
    res.sendFile(path.join(__dirname + '/dist/scrapping/index.html'));
});
app.listen(process.env.PORT || 8080);