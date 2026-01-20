import express from "express";
import productRouter from "./routes/productRoutes.js";
const app = express();

app.use(express.json());

app.use("/products", productRouter);
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


