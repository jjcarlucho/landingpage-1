import axios from 'axios';

interface RegisterData {
  email: string;
  password: string;
  fullName: string;
  phone: string;
  consent: boolean;
}

export const registerUser = async (data: RegisterData) => {
  try {
    const response = await axios.post('/api/register', data);
    return response.data;
  } catch (error) {
    throw error;
  }
}; 