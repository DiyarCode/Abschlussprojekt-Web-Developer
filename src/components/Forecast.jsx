import React from "react";
import { iconUrlFromCode } from "../services/weatherService";

import styled from "styled-components";
import breakpoint from "./breakpoint";

function Forecast({ title, items }) {
  console.log(items);
  return (
    <div>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>

      <MediaForecast className="flex flex-row items-center justify-between text-white shadow-2xl rounded-lg p-3 mt-2 ">
        {items.map((item) => (
          <div className="Card flex flex-col items-center justify-center mb-4">
            <p className="font-light text-sm">{item.title}</p>
            <img
              src={iconUrlFromCode(item.icon)}
              className="w-12 my-1"
              alt=""
            />
            <p className="font-medium">{`${item.temp.toFixed()}°`}</p>
          </div>
        ))}
      </MediaForecast>
    </div>
  );
}

const MediaForecast = styled.div`
  @media only screen and ${breakpoint.device.m} {
    margin: 4px, 4px;
    padding: 0px;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    border: solid, black;
    border-radius: 5px;

    .Card {
      padding: 1rem;
    }
  }
`;

export default Forecast;
