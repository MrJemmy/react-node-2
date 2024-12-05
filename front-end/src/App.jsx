import { useState, useEffect, useRef } from "react";

function App() {
  const [h1Data, setH1Data] = useState("");
  const [h1Data2, setH1Data2] = useState("");
  const [data, setdata] = useState("-------");
  const inputRef = useRef();

  // react : api
  useEffect(() => {
    fetch("http://localhost:3000/", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("GET API Call");
        setH1Data(data.msg);
      });

    fetch("http://localhost:3000/", {
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("POST API Call");
        setH1Data2(data.msg);
      });
  }, []);

  console.log("component render");

  return (
    <>
      <h1>{h1Data}</h1>
      <h1>{h1Data2}</h1>
      <h1> data: {data} </h1>
      <input type="text" ref={inputRef} />
      <input type="submit" onClick={() => setdata(inputRef.current.value)} />
    </>
  );
}

export default App;
