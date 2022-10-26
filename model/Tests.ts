import { Schema, model, models } from "mongoose";

const testSchema = new Schema({
  firstName: String,
  lastName: String,
});

const Tests = models.test || model("test", testSchema);

export default Tests;
