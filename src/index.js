import express from "express";
import { join, __dirname } from "./utils/index.js";
import userRoutes from "./routes/product.route.js";
//import {db} from "./config/db.js"; // Importamos la instancia de Firestore
//settings
const app = express();
app.set("PORT", 3000);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

app.use("/api/products", userRoutes);

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
