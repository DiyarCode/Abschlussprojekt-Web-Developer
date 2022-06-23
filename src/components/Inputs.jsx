import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import styled from "styled-components";
import breakpoint from "./breakpoint";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <InputMedia className="Input flex flex-row justify-center my-6 px-4">
      <div className="flex flex-row items-center justify-center p-3 m-2">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city...."
          className=" text-xl font-light p-2 px-6 hover:border-sky-400 rounded-xl border-4 shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl text-white font-light transition ease-out hover:scale-125"
          onClick={handleUnitsChange}
        >
          °F
        </button>
      </div>
    </InputMedia>
  );
}

const InputMedia = styled.div`
  @media only screen and ${breakpoint.device.s} {
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      padding-left: 2px;
      padding-right: 2px;
    }
  }
`;

export default Inputs;
