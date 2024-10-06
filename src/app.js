import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";
import { middlewareErrorHandler } from "./middleware/error.js";

import swaggerUi from "swagger-ui-express";
import OPENAPI_DOCS_SPEC from "./swagger-docs/swagger.js";

export const app = express();

// body parser
app.use(express.json());

//cookie parser
app.use(cookieParser());

// cors => cross origin resource sharing
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

// routes
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(OPENAPI_DOCS_SPEC));

// Testing api
app.get("/api/test", (request, response) => {
  response.status(200).send({
    success: true,
    message: "Your API is working fine",
  });
});

// Unknown API route
app.all("*", (request, response) => {
  response.status(404).send({
    success: false,
    message: `${request.originalUrl} route you are trying to reach does not exist`,
  });
});

app.use(middlewareErrorHandler);