import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { handleContact } from "./contact";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", handleContact);

  const httpServer = createServer(app);

  return httpServer;
}
