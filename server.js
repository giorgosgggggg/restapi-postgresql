const express = require("express")
const studentsRoutes = require("./src/student/routes")
const app = express()
const port = 3001;

app.use(express.json())

app.get("/", (req, res) => {
    res.send("hi")
})

app.use("/api/v1/students", studentsRoutes)

app.listen(port, () => console.log(`app is running on port ${port}  `))
