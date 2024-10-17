import axios from 'axios';

export async function getBuildingsByCategory(userId: string, category: string) {
  // returns a list of all buildings under the given category
  try {
    const response = await axios.get(`/private-rooms/${category}?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching available buildings:', error);
    return [];
  }
}

export async function getAvailableRooms(userId: string, buildingName: string, category: string) {
  // Returns the number of available rooms in a building
  try {
    const response = await axios.get(`/private-rooms/${category}/${buildingName}?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching available rooms:', error);
    return [];
  }
}