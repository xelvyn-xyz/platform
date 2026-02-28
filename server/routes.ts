import { Router, type Request, type Response } from "express";
import { z } from "zod";
import { DatabaseStorage } from "./storage.js";

const router = Router();
const storage = new DatabaseStorage();

const loginSchema = z.object({
  email: z.string().email(),
});

declare module "express-session" {
  interface SessionData {
    userId?: string;
  }
}

// POST /api/auth/login
router.post("/auth/login", async (req: Request, res: Response) => {
  try {
    const { email } = loginSchema.parse(req.body);

    let user = await storage.getUserByEmail(email);
    if (!user) {
      user = await storage.createUser(email);
    }

    req.session.userId = user.id;
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: "Invalid request" });
  }
});

// POST /api/auth/logout
router.post("/auth/logout", (req: Request, res: Response) => {
  req.session.destroy((err) => {
    if (err) {
      res.status(500).json({ error: "Logout failed" });
    } else {
      res.clearCookie("connect.sid");
      res.json({ success: true });
    }
  });
});

// GET /api/auth/me
router.get("/auth/me", async (req: Request, res: Response): Promise<void> => {
  try {
    if (!req.session.userId) {
      res.status(401).json({ error: "Not authenticated" });
      return;
    }

    const user = await storage.getUser(req.session.userId);
    if (!user) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user" });
  }
});

export { router };
