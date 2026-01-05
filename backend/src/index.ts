import express from "express";
import cors from "cors";
import path from "path";
import registerRouter from "./routes/register";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use(
  "/uploads",
  express.static(path.join(__dirname, "..", "uploads"))
);

app.use("/api", registerRouter);

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});

