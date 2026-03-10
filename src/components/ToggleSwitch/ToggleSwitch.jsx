import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnit";

export default function ToggleSwitch() {
  const { handleToggleSwitchChange, currentTemperatureUnit } = useContext(
    CurrentTemperatureUnitContext,
  );

  return (
    <label className="toggle-switch">
      <input
        onChange={handleToggleSwitchChange}
        type="checkbox"
        className="toggle-switch__checkbox"
      />
      <span className="toggle-switch__circule"></span>
      <span
        className={`toggle-switch__text toggle-switch__text_F ${
          currentTemperatureUnit === "F" ? "toggle-switch__text_active" : ""
        }`}
      >
        F
      </span>
      <span
        className={`toggle-switch__text toggle-switch__text_C ${
          currentTemperatureUnit === "C" ? "toggle-switch__text_active" : ""
        }`}
      >
        C
      </span>
    </label>
  );
}
