import axios from 'axios';

export const getCurrentRate = async () => {
  try {
    const result = await axios.get(
      'https://scrapper-fs-dev.onrender.com/api/rate'
    );
    return result;
  } catch (error) {
    console.log('error', error);
  }
};
