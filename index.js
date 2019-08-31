const { app } = require('./app')
 
const port = 3000

app.listen(port, () => console.log(`My blog is listening on port ${port}!`))
