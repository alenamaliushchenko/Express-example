import express from "express";
import { products } from "./data.js";

const app = express();

app.use(express.json());

app.get("/products", (req, res) => {
    res.status(200).json({
        status: "success",
        data: { products },
    });
})

app.get("/products/:id", (req, res) => {
    const indexToGet = products.findIndex(
        (product) => product.id === +req.params.id
    );
    if (indexToGet === -1) {
        res.status(404).json({
            status: "not found",
        });
        return;
    }
    res.status(200).json({
        status: "success",
        data: { products: products[indexToGet] },
    });
})

app.post("/products", (req, res) => {
    const newId = products[products.length - 1].id + 1;
    const newProduct = Object.assign({ id: newId }, req.body);

    products.push(newProduct);
    res.status(201).json({
        status: "success",
        data: { products: newProduct },
    });
});

app.delete("/products/:id", (req, res) => {
    const indexToRemove = products.findIndex(
        (product) => product.id === +req.params.id
    );
    if (indexToRemove === -1) {
        res.status(404).json({
            status: "not found",             
        });
        return;
    }
    products.splice(indexToRemove, 1);
    res.status(204).json({
        status: "success",
    });
});

app.put("/products/:id", (req, res) => {
    const indexToUpdate = products.fintIndex(
        (product) => product.id === +req.params.id
    );
    if (indexToUpdate === -1) {
        res.status(404).json({
            status: "not found",
        });
        return;
    }
    const updatedProduct = Object.assign({ id: req.params.id }, req.body);
    products.splice(indexToUpdate, 0, updatedProduct);
    res.status(200).json({
        status: "success",
        data: { products: updatedProduct },
    });
})

app.listen(3000);
