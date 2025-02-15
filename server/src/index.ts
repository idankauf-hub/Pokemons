import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import pokemonRoutes from "./routes/pokemonRoutes";
import { connectDB } from "./config/mongoConfig";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5050;

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/pokemons", pokemonRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Pokemons API!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
