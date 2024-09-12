import axiosClient from '@/api/apiClient';
import {describe, test, expect} from "vitest";

describe('axiosClient', () => {
  test('should have the correct base URL', () => {
    expect(axiosClient.defaults.baseURL).toBe(process.env.VITE_API_URL); // Check if your environment variable is correctly set during tests
  });

  test('should have the correct timeout', () => {
    expect(axiosClient.defaults.timeout).toBe(10000); // Timeout should be 10 seconds
  });

  test('should have the correct headers', () => {
    expect(axiosClient.defaults.headers['Content-Type']).toBe('application/json'); // Default header should be application/json
  });
});
