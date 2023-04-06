import React, { useState, useEffect } from "react";

function CentersList() {
  const [centers, setCenters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://isro.vercel.app/api/centres")
      .then((response) => response.json())
      .then((data) => setCenters(data.centres));
  }, []);

  const searchHandler = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCenters = centers.filter((center) =>
    center.State.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div> 
      <input type="text" placeholder="Search by state" onChange={searchHandler} />
      <ul>
        {filteredCenters.map((center) => (
          <li key={center.id}>{center.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CentersList;



