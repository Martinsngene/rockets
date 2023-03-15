/** @format */

// Search Function to find rockets by name
export const filterDataFromSearch = (arr: [], searchTerm: string) => {
  const newData = arr.filter((item: { name: string }) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return newData;
};

// Async function to get Rockets
export const getRockets = async () => {
  const rockets = await (
    await fetch(`http://localhost:3000/server/index.php`)
  ).json();
  return rockets;
};
