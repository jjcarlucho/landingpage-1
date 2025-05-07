import axios from 'axios';

export interface RegisterData {
  name: string;
  email: string;
  phone: string;
}

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await axios.post('/api/register', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const sendWelcomeEmail = async (email: string) => {
  try {
    const response = await axios.post('/api/send-welcome-email', { email });
    return response.data;
  } catch (error) {
    throw error;
  }
}; 