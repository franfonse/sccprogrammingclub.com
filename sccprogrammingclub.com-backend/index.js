import cors from "cors";
import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.get("/api", (_, res) => {
	console.log("Frontend connected to backend");
	res.json({ message: "Connected to backend" });
});

// ROUTES
import { contact } from "./routes/contact.js";

app.use("/contact", contact);

app.listen(PORT, () => {
	console.log(`Backend server running on http://localhost:${PORT}`);
});
