const BASE_URL = 'http://localhost:3000';
const VERCEL_URL = 'https://tripguide-mocha.vercel.app';

// GET all tests
export const getTests = async () => {
  const response = await fetch(`${VERCEL_URL}/api/tests`);
  const json = await response.json();

  return json;
};

// GET single test
export const getTest = async (testId: any) => {
  const response = await fetch(`${VERCEL_URL}/api/tests/${testId}`);
  const json = await response.json();

  if (json) return json;

  return {};
};

// POST a new test
export const addTest = async (formData: any) => {
  try {
    const Options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${VERCEL_URL}/api/tests/`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
};

// PUT a test
export const updateTest = async (testId: any, formData: any) => {
  try {
    const Options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    };

    const response = await fetch(`${VERCEL_URL}/api/tests/${testId}`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
};

// DELETE a test
export const deleteTest = async (testId: any) => {
  try {
    const Options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };

    const response = await fetch(`${VERCEL_URL}/api/tests/${testId}`, Options);
    const json = await response.json();

    return json;
  } catch (error) {
    return error;
  }
};
