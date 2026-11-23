import express from "express";
import { createClient } from "redis";

const app = express();

app.use(express.json());

const redisClient = createClient({
  url: "redis://localhost:6379",
});

redisClient.on("error", (error) => {
  console.log("Redis Error...", error);
});

const products = [
  { id: 1, name: "Laptop", price: 23000 },
  { id: 2, name: "Laptop", price: 23000 },
  { id: 3, name: "Laptop", price: 23000 },
  { id: 4, name: "Laptop", price: 23000 },
  { id: 5, name: "Laptop", price: 23000 },
];

app.get("/products", async (req, res) => {
  try {
    // 1. Check Redis cache

    const cacheProducts = await redisClient.get("products");

    if (cacheProducts) {
      console.log("Cache Hit");

      return res.json({
        source: "Redis Cache",
        data: JSON.parse(cacheProducts),
      });
    }

    // 2. Cache Miss: Fetch from data source
    console.log("Cache Misss");

    const productData = products;

    // 3. Save data in Redis for 60 seconds
    await redisClient.set("products", JSON.stringify(productData), { EX: 60 });

    // 4. Return data

    res.json({
      source: "Original Data Source",
      data: productData,
    });
  } catch (error) {
    console.log("Error Fetching Products...", error);

    res.status(500).json({
      message: "Something Went Wrong...",
    });
  }
});

app.put("products/:id" , async(req,res) => {

    const id = Number(req.params.id);

    const product = products.find((item) => item.id === id);


    if(!product)
    {
        return res.status(404).json({
            message : "Product Not Found"
        });
    }
 
    product.name = req.body.name;
    product.price = req.body.price;

       await redisClient.del("products");

       res.json({message : "Product Updated"});
})


async function startServer() {
  await redisClient.connect();

  app.listen(5000, () => {
    console.log("Server Running On Port 5000");
  });
}

startServer().catch((error) => {

    console.log("Failed To Start server...",error);
    process.exit(1);
    
})
