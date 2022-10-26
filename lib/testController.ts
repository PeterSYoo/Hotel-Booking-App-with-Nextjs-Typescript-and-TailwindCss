import { NextApiRequest, NextApiResponse } from "next";
import Tests from "../model/Tests";

// GET: http://localhost:3000/api/tests
export const getTests = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const tests = await Tests.find({});

    if (!tests) return res.status(404).json({ error: "Data not found." });

    res.status(200).json(tests);
  } catch (error) {
    res.status(404).json({ error: "Error while fetching data." });
  }
};

// POST: http://localhost:3000/api/tests
export const postTests = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const formData = req.body;

    if (!formData) {
      return res.status(404).json({ error: "Form data not provided!" });
    }

    Tests.create(formData, (err: any, data: any) => {
      return res.status(200).json(data);
    });
  } catch (error) {
    return res.status(404).json({ error });
  }
};

// PUT: http://localhost:3000/api/tests/?testId=
export const putTests = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { testId } = req.query;
    const formData = req.body;

    if (testId && formData) {
      const test = await Tests.findByIdAndUpdate(testId, formData);
      res.status(200).json(test);
    } else {
      res.status(404).json({ error: "Test not selected" });
    }
  } catch (error) {
    res.status(404).json({ error: "Error while updating data!" });
  }
};

// DELETE: http://localhost:3000/api/tests/?testId=
export const deleteTests = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  try {
    const { testId } = req.query;

    if (testId) {
      const test = await Tests.findByIdAndDelete(testId);
      res.status(200).json(test);
    } else {
      res.status(404).json({ error: "Test not selected" });
    }
  } catch (error) {
    res.status(404).json({ error: "Error while deleting test!" });
  }
};
