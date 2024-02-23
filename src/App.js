import React from "react";

// const getItems = async () => {
//   try {
//     const response = await fetch("http://localhost:8080/api/items", {
//       method: "GET",
//       cache: "default",
//     });
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };

const App = async () => {
  // const items = await getItems();
  // console.log(items);

  return <h1>A React Apppp {items}</h1>;
};

export default App;
