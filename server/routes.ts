import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { insertAppointmentSchema } from "@shared/appointments";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      await storage.createContactSubmission(validatedData);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to submit contact form" });
    }
  });

  // Appointment submission
  app.post("/api/appointments", async (req, res) => {
    try {
      const validatedData = insertAppointmentSchema.parse(req.body);
      await storage.createAppointment(validatedData);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to book appointment" });
    }
  });

  // Get all appointments
  app.get("/api/appointments", async (req, res) => {
    try {
      const appointments = await storage.getAppointments();
      res.json({ success: true, data: appointments });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to fetch appointments" });
    }
  });

  // Confirm an appointment
  app.put("/api/appointments/:id/confirm", async (req, res) => {
    try {
      const { id } = req.params;
      await storage.confirmAppointment(id);
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to confirm appointment" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
