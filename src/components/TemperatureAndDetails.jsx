import React from "react";
import styled from "styled-components";
import breakpoint from "./breakpoint";

import {
  UilArrowUp,
  UilArrowDown,
  UilTemperature,
  UilTear,
  UilWind,
  UilSun,
  UilSunset,
} from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

function TemperatureAndDetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    humidity,
    feels_like,
    timezone,
  },
}) {
  return (
    <div>
      <div className="flex items-center justify-center py-7 text-2xl text-cyan-300">
        <p>{details}</p>
      </div>

      <MediaTemperatureAndDetails1 className="flex flex-row items-center justify-between text-white py-7">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{`${temp.toFixed()}°`}</p>
        <div className="flex flex-col space-y-2">
          <div className="flex font-light text-m items-center justify-center">
            <UilTemperature size={25} className="mr-1" />
            Real feel:
            <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
          </div>
          <div className="flex font-light text-m items-center justify-center">
            <UilTear size={25} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
          </div>
          <div className="flex font-light text-m items-center justify-center">
            <UilWind size={25} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
          </div>
        </div>
      </MediaTemperatureAndDetails1>

      <MediaTemperatureAndDetails2 className="flex flex-row items-center justify-center space-x-2 text-white text-m py-16">
        <UilSun size={25} />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilSunset size={25} />
        <p className="font-light">
          Set:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunset, timezone, "hh:mm a")}
          </span>
        </p>
        <p className="font-light">|</p>

        <UilArrowUp size={25} />
        <p className="font-light">
          High:{" "}
          <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
        </p>
        <p className="font-light">|</p>

        <UilArrowDown size={25} />
        <p className="font-light">
          Low:{" "}
          <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
        </p>
      </MediaTemperatureAndDetails2>
    </div>
  );
}

const MediaTemperatureAndDetails1 = styled.div`
  @media only screen and ${breakpoint.device.sm} {
    display: flex;
    flex-direction: column;
  }
`;

const MediaTemperatureAndDetails2 = styled.div`
  @media only screen and ${breakpoint.device.m} {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export default TemperatureAndDetails;
