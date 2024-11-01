// App.js
import Help from "./sectionHelp/Help";
import About from "./sectionAbout/About";
import Cars from "./sectionCars/Cars";
import RootLayout from "./sectionRoot/RootLayout";
import ResultPage from "./sectionResult/ResultPage"; // Імпортуйте компонент ResultPage

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <RootLayout /> },
  { path: "/home", element: <RootLayout /> },
  { path: "/help", element: <Help /> },
  { path: "/about", element: <About /> },
  { path: "/cars", element: <Cars /> },
  { path: "/result/:makeId/:year", element: <ResultPage /> }, // Динамічний маршрут для сторінки результатів
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
