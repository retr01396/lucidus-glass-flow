import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
  const { teamName, eventName, numberOfMembers } = req.body;
  const fileInfo = req.file
    ? {
        filename: req.file.filename,
        path: req.file.path,
        mimetype: req.file.mimetype,
        size: req.file.size,
      }
    : null;

  // Temporary logging for visibility until DB wiring is added
  console.log("Registration received:", {
    teamName,
    eventName,
    numberOfMembers,
    paymentScreenshot: fileInfo,
  });

  return res.status(200).json({
    message: "Registration received",
  });
};

