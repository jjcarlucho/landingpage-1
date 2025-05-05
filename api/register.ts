import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
}

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

export const sendWelcomeEmail = async (email: string) => {
  try {
    const response = await axios.post(`${API_URL}/send-welcome-email`, { email });
    return response.data;
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
}; 