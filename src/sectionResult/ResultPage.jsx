// // sectionResult/ResultPage.js
// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";

// // const ResultPage = () => {
// //   const { makeId, year } = useParams(); // Отримуємо makeId та year з URL
// //   const [models, setModels] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchModels = async () => {
// //       try {
// //         const response = await fetch(
// //           `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
// //         );
// //         const data = await response.json();
// //         setModels(data.Results);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching vehicle models:", error);
// //         setError("Failed to fetch vehicle models.");
// //         setLoading(false);
// //       }
// //     };

// //     fetchModels();
// //   }, [makeId, year]);

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>{error}</p>;

// //   return (
// //     <div>
// //       <h1>
// //         Vehicle Models for Make ID: {makeId} and Year: {year}
// //       </h1>
// //       <ul>
// //         {models.map((model) => (
// //           <li key={model.Model_ID}>{model.Model_Name}</li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default ResultPage;

// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";

// // const ResultPage = () => {
// //   const { makeId, year } = useParams(); // Отримуємо makeId та year з URL
// //   const [models, setModels] = useState([]);
// //   const [carDetails, setCarDetails] = useState([]);
// //   const [loadingModels, setLoadingModels] = useState(true);
// //   const [loadingDetails, setLoadingDetails] = useState(true);
// //   const [error, setError] = useState(null);

// //   const apiKeyNinjas = "d094010d3amsh46f20b0986d3f89p10f027jsn756af17701ea"; // Ваш API ключ для API Ninjas

// //   // Отримання моделей автомобілів
// //   useEffect(() => {
// //     const fetchModels = async () => {
// //       try {
// //         const response = await fetch(
// //           `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
// //         );
// //         const data = await response.json();
// //         setModels(data.Results);
// //         setLoadingModels(false);
// //       } catch (error) {
// //         console.error("Error fetching vehicle models:", error);
// //         setError("Failed to fetch vehicle models.");
// //         setLoadingModels(false);
// //       }
// //     };

// //     fetchModels();
// //   }, [makeId, year]);

// //   // Отримання деталей автомобілів для кожної моделі
// //   useEffect(() => {
// //     const fetchCarDetails = async () => {
// //       const newCarDetails = [];
// //       for (const model of models) {
// //         try {
// //           const response = await fetch(
// //             `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model.Model_Name}`,
// //             {
// //               method: "GET",
// //               headers: {
// //                 "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
// //                 "X-RapidAPI-Key": apiKeyNinjas,
// //               },
// //             }
// //           );
// //           const data = await response.json();
// //           if (data.length > 0) {
// //             newCarDetails.push(data[0]); // Додаємо перший знайдений автомобіль
// //           }
// //         } catch (error) {
// //           console.error("Error fetching car details:", error);
// //           setError("Failed to fetch car details.");
// //         }
// //       }
// //       setCarDetails(newCarDetails);
// //       setLoadingDetails(false);
// //     };

// //     // Виконати запит лише якщо моделі доступні
// //     if (models.length > 0) {
// //       fetchCarDetails();
// //     }
// //   }, [models]);

// //   if (loadingModels || loadingDetails) return <p>Loading...</p>;
// //   if (error) return <p>{error}</p>;

// //   return (
// //     <div>
// //       <h1>
// //         Vehicle Models for Make: {makeId} and Year: {year}
// //       </h1>
// //       <ul>
// //         {models.map((model) => (
// //           <li key={model.Model_ID}>
// //             <h3>{model.Model_Name}</h3>
// //             {carDetails.length > 0 &&
// //               carDetails.map((car) => {
// //                 // Порівнюємо назву моделі з отриманими даними
// //                 return (
// //                   <div key={car.id}>
// //                     {car.model.toLowerCase() ===
// //                       model.Model_Name.toLowerCase() && (
// //                       <>
// //                         {car.image ? (
// //                           <img
// //                             src={car.image}
// //                             alt={car.model}
// //                             style={{ width: "200px", height: "auto" }}
// //                           />
// //                         ) : (
// //                           <p>No image available</p>
// //                         )}
// //                         <p>
// //                           Fuel: {car.fuel_type.toUpperCase() || "Not specified"}
// //                         </p>
// //                         <p>
// //                           Drive: {car.drive.toUpperCase() || "Not specified"}
// //                         </p>
// //                         <p>
// //                           Transmission:{" "}
// //                           {car.transmission === "a"
// //                             ? "Automatic"
// //                             : "Manual" || "Not specified"}
// //                         </p>
// //                       </>
// //                     )}
// //                   </div>
// //                 );
// //               })}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default ResultPage;

// // import React, { useEffect, useState } from "react";
// // import { useParams } from "react-router-dom";

// // const ResultPage = () => {
// //   const { makeId, year } = useParams(); // Отримуємо makeId та year з URL
// //   const [models, setModels] = useState([]);
// //   const [carDetails, setCarDetails] = useState([]);
// //   const [loadingModels, setLoadingModels] = useState(true);
// //   const [loadingDetails, setLoadingDetails] = useState(true);
// //   const [error, setError] = useState(null);

// //   const apiKeyNinjas = "d094010d3amsh46f20b0986d3f89p10f027jsn756af17701ea"; // Ваш API ключ для API Ninjas

// //   // Отримання моделей автомобілів
// //   useEffect(() => {
// //     const fetchModels = async () => {
// //       try {
// //         const response = await fetch(
// //           `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
// //         );
// //         const data = await response.json();
// //         setModels(data.Results);
// //         setLoadingModels(false);
// //       } catch (error) {
// //         console.error("Error fetching vehicle models:", error);
// //         setError("Failed to fetch vehicle models.");
// //         setLoadingModels(false);
// //       }
// //     };

// //     fetchModels();
// //   }, [makeId, year]);

// //   // Отримання деталей автомобілів для кожної моделі
// //   useEffect(() => {
// //     const fetchCarDetails = async () => {
// //       const newCarDetails = [];
// //       for (const model of models) {
// //         try {
// //           const response = await fetch(
// //             `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model.Model_Name}`,
// //             {
// //               method: "GET",
// //               headers: {
// //                 "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
// //                 "X-RapidAPI-Key": apiKeyNinjas,
// //               },
// //             }
// //           );
// //           const data = await response.json();

// //           // Логування отриманих даних
// //           console.log(`Data for model ${model.Model_Name}:`, data);

// //           if (data.length > 0) {
// //             newCarDetails.push(data[0]); // Додаємо перший знайдений автомобіль
// //           }
// //         } catch (error) {
// //           console.error("Error fetching car details:", error);
// //           setError("Failed to fetch car details.");
// //         }
// //       }
// //       setCarDetails(newCarDetails);
// //       setLoadingDetails(false);
// //     };

// //     // Виконати запит лише якщо моделі доступні
// //     if (models.length > 0) {
// //       fetchCarDetails();
// //     }
// //   }, [models]);

// //   if (loadingModels || loadingDetails) return <p>Loading...</p>;
// //   if (error) return <p>{error}</p>;

// //   return (
// //     <div>
// //       <h1>
// //         Vehicle Models for Make: {makeId} and Year: {year}
// //       </h1>
// //       <ul>
// //         {models.map((model) => (
// //           <li key={model.Model_ID}>
// //             <h3>{model.Model_Name}</h3>
// //             {carDetails.map((car) => {
// //               // Порівнюємо назву моделі з отриманими даними
// //               const isMatchingModel =
// //                 car.model.toLowerCase() === model.Model_Name.toLowerCase();
// //               return (
// //                 <div key={car.id}>
// //                   {isMatchingModel && (
// //                     <>
// //                       {car.image ? (
// //                         <img
// //                           src={car.image}
// //                           alt={car.model}
// //                           style={{ width: "200px", height: "auto" }}
// //                         />
// //                       ) : (
// //                         <p>No image available</p>
// //                       )}
// //                       <p>
// //                         Fuel: {car.fuel_type?.toUpperCase() || "Not specified"}
// //                       </p>
// //                       <p>
// //                         Drive: {car.drive?.toUpperCase() || "Not specified"}
// //                       </p>
// //                       <p>
// //                         Transmission:{" "}
// //                         {car.transmission === "a"
// //                           ? "Automatic"
// //                           : "Manual" || "Not specified"}
// //                       </p>
// //                     </>
// //                   )}
// //                 </div>
// //               );
// //             })}
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default ResultPage;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import classes from "./ResultPage.module.css";

// const ResultPage = () => {
//   const { makeId, year } = useParams(); // Отримуємо makeId та year з URL
//   const [models, setModels] = useState([]);
//   const [carDetails, setCarDetails] = useState([]);
//   const [loadingModels, setLoadingModels] = useState(true);
//   const [loadingDetails, setLoadingDetails] = useState(true);
//   const [error, setError] = useState(null);

//   const apiKeyNinjas = "d094010d3amsh46f20b0986d3f89p10f027jsn756af17701ea";

//   const generateCarImageUrl = (make, model, year) => {
//     const url = new URL("https://cdn.imagin.studio/getimage");
//     url.searchParams.append("customer", "img");
//     url.searchParams.append("make", make);
//     url.searchParams.append("modelFamily", model.split(" ")[0]);
//     url.searchParams.append("zoomType", "fullscreen");
//     url.searchParams.append("modelYear", year);

//     return url.toString();
//   };

//   useEffect(() => {
//     const fetchModels = async () => {
//       try {
//         const response = await fetch(
//           `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
//         );
//         const data = await response.json();
//         setModels(data.Results);
//         setLoadingModels(false);
//       } catch (error) {
//         console.error("Error fetching vehicle models:", error);
//         setError("Failed to fetch vehicle models.");
//         setLoadingModels(false);
//       }
//     };

//     fetchModels();
//   }, [makeId, year]);

//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       const newCarDetails = [];
//       for (const model of models) {
//         try {
//           const response = await fetch(
//             `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model.Model_Name}`,
//             {
//               method: "GET",
//               headers: {
//                 "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//                 "X-RapidAPI-Key": apiKeyNinjas,
//               },
//             }
//           );
//           const data = await response.json();
//           if (data.length > 0) {
//             newCarDetails.push(data[0]); // Додаємо перший знайдений автомобіль
//           }
//         } catch (error) {
//           console.error("Error fetching car details:", error);
//           setError("Failed to fetch car details.");
//         }
//       }
//       setCarDetails(newCarDetails);
//       setLoadingDetails(false);
//     };

//     if (models.length > 0) {
//       fetchCarDetails();
//     }
//   }, [models]);

//   if (loadingModels || loadingDetails) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <h1>
//         Vehicle Models for Make: {makeId} (ID: {makeId}) and Year: {year}
//       </h1>
//       <ul>
//         {models.map((model) => (
//           <li key={model.Model_ID}>
//             <h3>{model.Model_Name}</h3>
//             {carDetails.length > 0 &&
//               carDetails.map((car) => {
//                 return (
//                   <div key={car.id}>
//                     {car.model.toLowerCase() ===
//                       model.Model_Name.toLowerCase() && (
//                       <>
//                         <img
//                           src={generateCarImageUrl(
//                             car.make,
//                             car.model,
//                             car.year
//                           )}
//                           alt={car.model}
//                           style={{ width: "200px", height: "auto" }}
//                         />
//                         <p>
//                           Fuel: {car.fuel_type.toUpperCase() || "Not specified"}
//                         </p>
//                         <p>
//                           Drive: {car.drive.toUpperCase() || "Not specified"}
//                         </p>
//                         <p>
//                           Transmission:{" "}
//                           {car.transmission === "a"
//                             ? "Automatic"
//                             : "Manual" || "Not specified"}
//                         </p>
//                       </>
//                     )}
//                   </div>
//                 );
//               })}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ResultPage;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import classes from "./ResultPage.module.css"; // Не забудьте включити нові стилі

// const ResultPage = () => {
//   const { makeId, year } = useParams(); // Отримуємо makeId та year з URL
//   const [models, setModels] = useState([]);
//   const [carDetails, setCarDetails] = useState([]);
//   const [loadingModels, setLoadingModels] = useState(true);
//   const [loadingDetails, setLoadingDetails] = useState(true);
//   const [error, setError] = useState(null);

//   const apiKeyNinjas = "d094010d3amsh46f20b0986d3f89p10f027jsn756af17701ea";

//   const generateCarImageUrl = (make, model, year) => {
//     const url = new URL("https://cdn.imagin.studio/getimage");
//     url.searchParams.append("customer", "img");
//     url.searchParams.append("make", make);
//     url.searchParams.append("modelFamily", model.split(" ")[0]);
//     url.searchParams.append("zoomType", "fullscreen");
//     url.searchParams.append("modelYear", year);

//     return url.toString();
//   };

//   useEffect(() => {
//     const fetchModels = async () => {
//       try {
//         const response = await fetch(
//           `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
//         );
//         const data = await response.json();
//         setModels(data.Results);
//         setLoadingModels(false);
//       } catch (error) {
//         console.error("Error fetching vehicle models:", error);
//         setError("Failed to fetch vehicle models.");
//         setLoadingModels(false);
//       }
//     };

//     fetchModels();
//   }, [makeId, year]);

//   useEffect(() => {
//     const fetchCarDetails = async () => {
//       const newCarDetails = [];
//       for (const model of models) {
//         try {
//           const response = await fetch(
//             `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model.Model_Name}`,
//             {
//               method: "GET",
//               headers: {
//                 "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
//                 "X-RapidAPI-Key": apiKeyNinjas,
//               },
//             }
//           );
//           const data = await response.json();
//           if (data.length > 0) {
//             newCarDetails.push(data[0]); // Додаємо перший знайдений автомобіль
//           }
//         } catch (error) {
//           console.error("Error fetching car details:", error);
//           setError("Failed to fetch car details.");
//         }
//       }
//       setCarDetails(newCarDetails);
//       setLoadingDetails(false);
//     };

//     if (models.length > 0) {
//       fetchCarDetails();
//     }
//   }, [models]);

//   if (loadingModels || loadingDetails) {
//     return (
//       <div className={classes.spinnerContainer}>
//         <div className={classes.spinner}></div>
//       </div>
//     );
//   }
//   if (error) return <p>{error}</p>;

//   return (
//     <div className={classes.resultPage}>
//       <h1>
//         Vehicle Models for Make: {makeId} (ID: {makeId}) and Year: {year}
//       </h1>
//       <div className={classes.carCardContainer}>
//         {models.map((model) => (
//           <div key={model.Model_ID} className={classes.carCard}>
//             <h3>{model.Model_Name}</h3>
//             {carDetails.length > 0 &&
//               carDetails.map((car) => {
//                 return (
//                   <div key={car.id} className={classes.carInfo}>
//                     {car.model.toLowerCase() ===
//                       model.Model_Name.toLowerCase() && (
//                       <>
//                         <img
//                           src={generateCarImageUrl(
//                             car.make,
//                             car.model,
//                             car.year
//                           )}
//                           alt={car.model}
//                           className={classes.carImage}
//                         />
//                         <p>
//                           Fuel: {car.fuel_type.toUpperCase() || "Not specified"}
//                         </p>
//                         <p>
//                           Drive: {car.drive.toUpperCase() || "Not specified"}
//                         </p>
//                         <p>
//                           Transmission:{" "}
//                           {car.transmission === "a"
//                             ? "Automatic"
//                             : "Manual" || "Not specified"}
//                         </p>
//                       </>
//                     )}
//                   </div>
//                 );
//               })}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResultPage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./ResultPage.module.css"; // Не забудьте включити нові стилі

const ResultPage = () => {
  const { makeId, year } = useParams(); // Отримуємо makeId та year з URL
  const [models, setModels] = useState([]);
  const [carDetails, setCarDetails] = useState([]);
  const [loadingModels, setLoadingModels] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMake, setSelectedMake] = useState(""); // Додано для зберігання марки

  const apiKeyNinjas = "d094010d3amsh46f20b0986d3f89p10f027jsn756af17701ea";

  const generateCarImageUrl = (make, model, year) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    url.searchParams.append("customer", "img");
    url.searchParams.append("make", make);
    url.searchParams.append("modelFamily", model.split(" ")[0]);
    url.searchParams.append("zoomType", "fullscreen");
    url.searchParams.append("modelYear", year);

    return url.toString();
  };

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch(
          `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
        );
        const data = await response.json();
        setModels(data.Results);
        if (data.Results.length > 0) {
          setSelectedMake(data.Results[0].Make_Name); // Зберігаємо назву марки
        }
        setLoadingModels(false);
      } catch (error) {
        console.error("Error fetching vehicle models:", error);
        setError("Failed to fetch vehicle models.");
        setLoadingModels(false);
      }
    };

    fetchModels();
  }, [makeId, year]);

  useEffect(() => {
    const fetchCarDetails = async () => {
      const newCarDetails = [];
      for (const model of models) {
        try {
          const response = await fetch(
            `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model.Model_Name}`,
            {
              method: "GET",
              headers: {
                "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
                "X-RapidAPI-Key": apiKeyNinjas,
              },
            }
          );
          const data = await response.json();
          if (data.length > 0) {
            newCarDetails.push(data[0]); // Додаємо перший знайдений автомобіль
          }
        } catch (error) {
          console.error("Error fetching car details:", error);
          setError("Failed to fetch car details.");
        }
      }
      setCarDetails(newCarDetails);
      setLoadingDetails(false);
    };

    if (models.length > 0) {
      fetchCarDetails();
    }
  }, [models]);

  if (loadingModels || loadingDetails) {
    return (
      <div className={classes.spinnerContainer}>
        <div className={classes.spinner}></div>
      </div>
    );
  }
  if (error) return <p>{error}</p>;

  return (
    <div className={classes.resultPage}>
      <h1 className={classes.header}>
        Vehicle Models for Make: {selectedMake || makeId} (ID: {makeId}) and
        Year: {year}
      </h1>
      <div className={classes.carCardContainer}>
        {models.map((model) => (
          <div key={model.Model_ID} className={classes.carCard}>
            <h3>{model.Model_Name}</h3>
            {carDetails.length > 0 &&
              carDetails.map((car) => {
                return (
                  <div key={car.id} className={classes.carInfo}>
                    {car.model.toLowerCase() ===
                      model.Model_Name.toLowerCase() && (
                      <>
                        <img
                          src={generateCarImageUrl(
                            car.make,
                            car.model,
                            car.year
                          )}
                          alt={car.model}
                          className={classes.carImage}
                        />
                        <p>
                          Fuel: {car.fuel_type.toUpperCase() || "Not specified"}
                        </p>
                        <p>
                          Drive: {car.drive.toUpperCase() || "Not specified"}
                        </p>
                        <p>
                          Transmission:{" "}
                          {car.transmission === "a"
                            ? "Automatic"
                            : "Manual" || "Not specified"}
                        </p>
                      </>
                    )}
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
