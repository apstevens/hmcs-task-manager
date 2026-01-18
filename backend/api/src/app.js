import express from 'express';
import taskRoutes from './routes/taskRoutes.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.use(express.json());

app.get("/health", (req,res) => {
    res.json({ status: "OK" });
})

app.use("/tasks", taskRoutes);

app.use(errorHandler);

export default app;
