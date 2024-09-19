// function that takes two arguments: user id and room selected
// then it checks the database for how many rooms in that category are available
// then it returns a list of available rooms.
import axios from 'axios';

export default async function roomAvailabilityChecker(userId: string, category: string) {
  try {
    const response = await axios.get(`/api/rooms?userId=${userId}&category=${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching available rooms:', error);
    return [];
  }
}