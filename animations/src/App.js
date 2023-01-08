import React, { useState, useEffect } from "react";
import "./styles.css";
import "video-react/dist/video-react.css";
import Header from "./Header";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  TravelerEffect,
  OceanEffect,
  RainEffect,
  SeaWaveEffect,
  SnowFallEffect,
  SnowFallSlowEffect,
  CloudWaveEffect,
} from "react-background-animation";
import {
  blue,
  green,
  lightGreen,
  pink,
  purple,
  yellow,
} from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default function App() {
  const [toggleTheme, setToggleTheme] = useState(
    () => JSON.parse(localStorage.getItem("toggleTheme")) || "light"
  );
  useEffect(() => {
    localStorage.setItem("toggleTheme", JSON.stringify(toggleTheme));
    document.body.classList.add(toggleTheme);
    return () => {
      document.body.classList.remove(toggleTheme);
      console.log("unmount");
    };
  }, [toggleTheme]);
  const classes = `${toggleTheme} App`;

  const [travellerMediaCheck, setTravellerMediaCheck] = React.useState(false);
  const [OceanEffectCheck, setOceanEffectCheck] = React.useState(false);
  const [cloudWaveCheck, setCloudWaveCheck] = React.useState(false);
  const [rainEffectCheck, setRainEffectCheck] = React.useState(false);
  const [snowFallEffectCheck, setSnowFallEffectChange] = React.useState(false);
  const [slowSnowFall, setSlowSnowFall] = React.useState(false);
  const [seaWaveEffect, setSsetSeaWaveEffect] = React.useState(false);

  const travellerMediaHandleChange = (event) => {
    setTravellerMediaCheck(event.target.checked);
  };

  const OceanEffectHandleChange = (event) => {
    setOceanEffectCheck(event.target.checked);
  };

  const CloudWaveEffectHandleChange = (event) => {
    setCloudWaveCheck(event.target.checked);
  };

  const RainEffectHandleChange = (event) => {
    setRainEffectCheck(event.target.checked);
  };

  const SnowFallEffectHandleChange = (event) => {
    setSnowFallEffectChange(event.target.checked);
  };

  const slowSnowFallHandleChange = (event) => {
    setSlowSnowFall(event.target.checked);
  };

  const seaWaveHandleChange = (event) => {
    setSsetSeaWaveEffect(event.target.checked);
  };

  return (
    <div className="App" style={{ flexDirection: "row" }}>
      <div>
        <Header />
      </div>
      <div className="Additional Area" style={{ flexDirection: "row" }}>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "25px",
            marginBottom: "25px",
          }}
        >
          <Button
            variant="contained"
            style={{ marginLeft: "15px" }}
            className={classes}
            onClick={() => {
              return toggleTheme === "dark"
                ? setToggleTheme("light")
                : setToggleTheme("dark");
            }}
          >
            {toggleTheme === "dark" ? "Light Mode" : "dark mode"}
          </Button>
        </Box>
      </div>
      <div className="Checkbox">
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: blue[800],
                "&.Mui-checked": {
                  color: blue[600],
                },
              }}
              checked={travellerMediaCheck}
              onChange={travellerMediaHandleChange}
            />
          }
          label="Traveller Media"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: purple[800],
                "&.Mui-checked": {
                  color: purple[600],
                },
              }}
            />
          }
          checked={OceanEffectCheck}
          onChange={OceanEffectHandleChange}
          label="Ocean Effect"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: green[800],
                "&.Mui-checked": {
                  color: green[600],
                },
              }}
            />
          }
          checked={cloudWaveCheck}
          onChange={CloudWaveEffectHandleChange}
          label="Cloud Wave Effect"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              color="default"
              sx={{
                color: yellow[800],
                "&.Mui-checked": {
                  color: yellow[600],
                },
              }}
            />
          }
          checked={rainEffectCheck}
          onChange={RainEffectHandleChange}
          label="Rain Effect"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
            />
          }
          checked={snowFallEffectCheck}
          onChange={SnowFallEffectHandleChange}
          label="Snow Fall Effect"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: yellow[800],
                "&.Mui-checked": {
                  color: yellow[600],
                },
              }}
            />
          }
          checked={slowSnowFall}
          onChange={slowSnowFallHandleChange}
          label="Slow Snow Fall Shower"
        />
        <FormControlLabel
          control={
            <Checkbox
              defaultChecked
              sx={{
                color: lightGreen[800],
                "&.Mui-checked": {
                  color: lightGreen[600],
                },
              }}
            />
          }
          checked={seaWaveEffect}
          onChange={seaWaveHandleChange}
          label="Sea Wave Effect"
        />
      </div>
      <div className="Animation field" style={{ borderStyle: "solid" }}>
        {travellerMediaCheck && <TravelerEffect />}
        {OceanEffectCheck && <OceanEffect />}
        {cloudWaveCheck && <CloudWaveEffect />}
        {rainEffectCheck && <RainEffect />}
        {snowFallEffectCheck && <SnowFallEffect />}
        {slowSnowFall && <SnowFallSlowEffect />}
        {seaWaveEffect && <SeaWaveEffect />}
      </div>
    </div>
  );
}
