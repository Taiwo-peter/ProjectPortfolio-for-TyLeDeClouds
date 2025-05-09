import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes would go here if needed
  // Since this is a static showcase site, we don't need any APIs
  
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'TyleDeClouds AWS Integration Showcase is running!' });
  });

  const httpServer = createServer(app);
  
  return httpServer;
}
