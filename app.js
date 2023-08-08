import Express  from "express";
import "dotenv/config";
import router from "./routers/router.js";
import cors from "cors"

const app = Express();

const port = process.env.PORT;

app.use(Express.json());
app.get("/about", (req, res) => {
    res.send("This is the about page.");
  });

app.use(Express.urlencoded({ extended: true }));
app.use(cors())
app.use(router);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
});