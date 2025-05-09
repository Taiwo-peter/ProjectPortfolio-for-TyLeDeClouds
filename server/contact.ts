import { Request, Response } from "express";
import { z } from "zod";
import { validateEmail } from "../client/src/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContact(req: Request, res: Response) {
  try {
    // Validate request body
    const result = contactSchema.safeParse(req.body);
    
    if (!result.success) {
      return res.status(400).json({ 
        message: "Invalid form data", 
        errors: result.error.errors 
      });
    }
    
    const { name, email, message } = result.data;
    
    // Validate email format
    if (!validateEmail(email)) {
      return res.status(400).json({ 
        message: "Invalid email format" 
      });
    }
    
    // In a real application, you would send an email or store the message
    // For now, we'll just log it and return success
    console.log(`Contact form submission from ${name} (${email}): ${message}`);
    
    return res.status(200).json({ 
      message: "Message received successfully" 
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return res.status(500).json({ 
      message: "An error occurred while processing your request" 
    });
  }
}
