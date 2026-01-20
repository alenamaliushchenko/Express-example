import { products } from "../data.js";
export const getAllProducts =  (req, res) => {
    res.status(200).json({
        status: "success",
        data: { products },
    });
}

export const getProductById =  (req, res) => {
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
}

export const createProduct =  (req, res) => {
    const newId = products[products.length - 1].id + 1;
    const newProduct = Object.assign({ id: newId }, req.body);

    products.push(newProduct);
    res.status(201).json({
        status: "success",
        data: { products: newProduct },
    });
}

export const deleteProduct = (req, res) => {
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
};

export const updateProduct = (req, res) => {
    const indexToUpdate = products.findIndex(
        (product) => product.id === +req.params.id
    );
    if (indexToUpdate === -1) {
        res.status(404).json({
            status: "not found",
        });
        return;
    }
    const updatedProduct = Object.assign({ id: req.params.id }, req.body);
    products.splice(indexToUpdate, 1, updatedProduct);
    res.status(200).json({
        status: "success",
        data: { products: updatedProduct },
    });
};