const {Router} = require("express");
const { createcart,deleteCart, get, updatecart } = require("../controller/cartController");

const cartRouter = new Router();

cartRouter.post("/create", async(req,res) => {
    try {
        if(req.isAuth) {
            if(req.access === "customer") {
                const response = await createcart(req);
                res.send(response)
            } else {
                const err = new Error("Unauthorized Access");
                res.send({ err: err.message });
                res.end();
            }
        } else {
            const err = new Error("Unauthenticated Access");
            res.send({ err: err.message });
            res.end();
        }
    } catch (error) {
        res.send({err: error.message})
    }
})
cartRouter.patch("/update/:cartId", async(req,res) => {
    try {
        if(req.isAuth) {
            if(req.access === "customer") {
                const response = await updatecart(req);
                res.send(response)
            } else {
                const err = new Error("Unauthorized Access");
                res.send({ err: err.message });
                res.end();
            }
        } else {
            const err = new Error("Unauthenticated Access");
            res.send({ err: err.message });
            res.end();
        }
    } catch (error) {
        res.send({err: error.message})
    }
})
cartRouter.delete("/delete/:cartId", async (req,res) => {
    try {
        if(req.isAuth) {
            if(req.access === "customer") {
                const response = await deleteCart(req);
                res.send(response)
            } else {
                const err = new Error("Unauthorized Access");
                res.send({ err: err.message });
                res.end();
            }
        } else {
            const err = new Error("Unauthenticated Access");
            res.send({ err: err.message });
            res.end();
        }
    } catch (error) {
        res.send({err: error.message})
    }
})
cartRouter.get("/:cartId", async(req,res) => {
    try {
        if(req.isAuth) {
            const response = await get(req);
            res.send(response)
        } else {
            const err = new Error("Unauthenticated Access");
            res.send({ err: err.message });
            res.end();
        }
    } catch (error) {
        res.send({err: error.message})
    }
})
// cartRouter.get("/", (req,res) => {
//     try {
        
//     } catch (error) {
//         res.send({err: error.message})
//     }
// })