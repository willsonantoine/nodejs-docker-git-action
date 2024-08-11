import express from "express";
import cors from "cors";
import { createServer } from "http";
import * as dotevnv from "dotenv";
import AppRouter from "./app.router";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";

dotevnv.config();

const app = express();
const httpServer = createServer(app);

app.set("trust proxy", true);
app.use(express.json());
app.use(express.text());

// Middleware pour parser le corps des requêtes XML
app.use(bodyParser.text({ type: "text/xml" }));
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));


app.use("/api", AppRouter);

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
