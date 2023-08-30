// api.js

const fetchItemStatus = async (itemId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${itemId}`);
    const data = await response.json();
    return data.completed;
  } catch (error) {
    console.error('Error fetching item status:', error);
    return false;
  }
};

export default fetchItemStatus;
