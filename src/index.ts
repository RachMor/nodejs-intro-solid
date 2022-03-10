import express from "express";

import { usersRoutes } from "./routes/users.routes";

const app = express();
import swagger from 'swagger-ui-express';
import swaggerFile from './swagger.json';

app.use(express.json());

app.use("/users", usersRoutes);

app.use("/api-docs", swagger.serve, swagger.setup(swaggerFile));

export { app };
