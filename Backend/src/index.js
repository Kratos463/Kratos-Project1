const dotenv = require("dotenv")
const connectDB = require("./database/connect.js")
const {app} = require("./app.js")

dotenv.config({ path: "./.env" })

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8001, () => {
            console.log("Server is running at port", process.env.PORT)
        })
        // Handle server error event
        app.on('error', (err) => {
            console.error('Server error:', err);
        });

        // Handle server close event
        app.on('close', () => {
            console.log('Server closed');
        });
    })
    .catch((err) => {
        console.log("Mongo db connection failed", err)
    })