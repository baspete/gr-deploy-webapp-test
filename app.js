const express = require('express'),
  app = express();

app.use('/', (req, res) => {
  res.send("It's alive!");
});



const port = process.env.PORT || 9000;
app.listen(port);
