import * as express from "express";
import * as path from "path";
import routes from "./routes";
import { configurePassport } from "./middleware/passport-strategies.mw";

const app = express();

configurePassport(app);
app.use(express.static("public"));
app.use(express.json());
app.use(routes);
app.use("/api/*", (req, res) =>
    res.status(404).json({ message: `Sorry, ${req.method} to ${req.originalUrl} not implemented at this time.` })
);
app.use("/auth/*", (req, res) =>
    res.status(404).json({ message: `Sorry, ${req.method} to ${req.originalUrl} not implemented at this time.` })
);

// A 404 SPA catcher
app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../public/index.html")));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
