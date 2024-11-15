const app = require('./app.js')
const dotenv = require('dotenv');

dotenv.config();
const port = process.env.PORT;

app.listen(port, (error) => {
    if (error) {
        console.log(error);
    } else {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    }
});