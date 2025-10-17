import { type User, type InsertUser, type ContactSubmission, type InsertContact } from "@shared/schema";
import { type Appointment, type InsertAppointment } from "@shared/appointments";
import { randomUUID } from "crypto";
import bcrypt from "bcrypt";

export interface IStorage {
  // User methods
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  validateUserPassword(id: string, p: string): Promise<boolean>;

  // Contact submission methods
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;

  // Appointment methods
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointments(): Promise<Appointment[]>;
  confirmAppointment(id: string): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User> = new Map();
  private contactSubmissions: Map<string, ContactSubmission> = new Map();
  private appointments: Map<string, Appointment> = new Map();

  // User methods
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(u => u.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(insertUser.password, saltRounds);
    const user: User = { ...insertUser, password: hashedPassword, id: randomUUID() };
    this.users.set(user.id, user);
    return user;
  }

  async validateUserPassword(id: string, p: string): Promise<boolean> {
    const user = await this.getUser(id);
    if (!user) {
      return false;
    }
    return bcrypt.compare(p, user.password);
  }

  // Contact submission methods
  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const submission: ContactSubmission = {
      ...insertContact,
      id: randomUUID(),
      createdAt: new Date(),
      phone: insertContact.phone || null,
      serviceInterest: insertContact.serviceInterest || null,
    };
    this.contactSubmissions.set(submission.id, submission);
    return submission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  // Appointment methods
  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const appointment: Appointment = {
      ...insertAppointment,
      id: randomUUID(),
      confirmed: false,
      createdAt: new Date(),
      phone: insertAppointment.phone || null,
    };
    this.appointments.set(appointment.id, appointment);
    return appointment;
  }

  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values()).sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async confirmAppointment(id: string): Promise<void> {
    const appointment = this.appointments.get(id);
    if (appointment) {
      appointment.confirmed = true;
    }
  }
}

export const storage = new MemStorage();
