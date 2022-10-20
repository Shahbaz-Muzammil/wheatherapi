import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 }
  ];
  const [sert, setSert] = useState("");
  const [data, setData] = useState(cars);
  // const [show, setShow] = useState(false);

  const handleChange = (e) => {
    setSert(e.target.value);
    console.log(e.target.value);
    if (e.target.value === "ByAlphabet") {
      const sorting = cars.sort((a, b) =>
        b.type.toLowerCase() - a.type.toLowerCase() ? 1 : -1
      );
      console.log("sortin alphabet", sorting);
      setData(sorting);
      return sorting;
    } else if (e.target.value === "ByNumber") {
      const sortingbynumber = cars.sort((a, b) =>
        Number(b.year) < Number(a.year) ? 1 : -1
      );
      console.log("sorting number", sortingbynumber);
      setData(sortingbynumber);
      return sortingbynumber;
    } else {
      setData(cars);
    }
  };

  return (
    <div className="App">
      <select
        value={sert}
        onChange={(e) => {
          handleChange(e);
        }}
      >
        {/* <option value="Ascending">Ascending</option> */}
        {/* <option value="Dscending ">Dscending</option> */}
        <option value="ByAlphabet">ByAlphabet</option>
        <option value="ByNumber">By Number</option>
      </select>

      {data.map((elem) => {
        return (
          <>
            <h1>
              {" "}
              {elem.type} {elem.year}
            </h1>
          </>
        );
      })}
    </div>
  );
}
