var express = require('express');
var app = express();
var port = 1337;

app.get('/etage/:etagenum/chambre/:chambre', function(req,res){

  res.render('chambre.ejs', {etage: req.params.etagenum, chambre: req.params.chambre})

});
app.listen(port);
console.log('Demarrage du serveur sur le port : ' + port);
