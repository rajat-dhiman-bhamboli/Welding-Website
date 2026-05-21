import mongoose, { Schema, model, models } from "mongoose";

const InquirySchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ["pending", "contacted", "closed"], default: "pending" },
}, { timestamps: true });

const Inquiry = models.Inquiry || model("Inquiry", InquirySchema);

export default Inquiry;
