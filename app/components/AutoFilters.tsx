"use client";

import React, { useState } from "react";

const AutoFilters: React.FC = () => {
  const [selectedBodyType, setSelectedBodyType] = useState<string>("");
  const [selectedEngine, setSelectedEngine] = useState<string>("");
  const [selectedTransmission, setSelectedTransmission] = useState<string>("");
  const [selectedDrive, setSelectedDrive] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  const bodyTypes = ["Седан", "Хэтчбек", "Кроссовер", "Джип", "Минивэн"];
  const engines = ["Атмосферный", "Турбированный"];
  const transmissions = [
    "Автоматическая",
    "Механическая",
    "Вариатор",
    "Роботизированная",
  ];
  const drives = ["Передний", "Задний", "Полный"];
  const colors = ["Белый", "Серый", "Черный", "Синий", "Красный"];

  return (
    <div className="auto-filters">
      <h3 className="auto-filters__title">Фильтры</h3>

      {/* Тип кузова */}
      <div className="auto-filters__section">
        <h4 className="auto-filters__section-title">ТИП КУЗОВА</h4>
        <div className="auto-filters__options">
          {bodyTypes.map((type) => (
            <label key={type} className="auto-filters__option">
              <input
                type="radio"
                name="bodyType"
                value={type}
                checked={selectedBodyType === type}
                onChange={(e) => setSelectedBodyType(e.target.value)}
                className="auto-filters__radio"
              />
              <span className="auto-filters__option-text">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Двигатель */}
      <div className="auto-filters__section">
        <h4 className="auto-filters__section-title">ДВИГАТЕЛЬ</h4>
        <div className="auto-filters__options">
          {engines.map((engine) => (
            <label key={engine} className="auto-filters__option">
              <input
                type="radio"
                name="engine"
                value={engine}
                checked={selectedEngine === engine}
                onChange={(e) => setSelectedEngine(e.target.value)}
                className="auto-filters__radio"
              />
              <span className="auto-filters__option-text">{engine}</span>
            </label>
          ))}
        </div>
      </div>

      {/* КПП */}
      <div className="auto-filters__section">
        <h4 className="auto-filters__section-title">КПП</h4>
        <div className="auto-filters__options">
          {transmissions.map((transmission) => (
            <label key={transmission} className="auto-filters__option">
              <input
                type="radio"
                name="transmission"
                value={transmission}
                checked={selectedTransmission === transmission}
                onChange={(e) => setSelectedTransmission(e.target.value)}
                className="auto-filters__radio"
              />
              <span className="auto-filters__option-text">{transmission}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Привод */}
      <div className="auto-filters__section">
        <h4 className="auto-filters__section-title">ПРИВОД</h4>
        <div className="auto-filters__options">
          {drives.map((drive) => (
            <label key={drive} className="auto-filters__option">
              <input
                type="radio"
                name="drive"
                value={drive}
                checked={selectedDrive === drive}
                onChange={(e) => setSelectedDrive(e.target.value)}
                className="auto-filters__radio"
              />
              <span className="auto-filters__option-text">{drive}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Цвет */}
      <div className="auto-filters__section">
        <h4 className="auto-filters__section-title">ЦВЕТ</h4>
        <div className="auto-filters__options">
          {colors.map((color) => (
            <label key={color} className="auto-filters__option">
              <input
                type="radio"
                name="color"
                value={color}
                checked={selectedColor === color}
                onChange={(e) => setSelectedColor(e.target.value)}
                className="auto-filters__radio"
              />
              <span className="auto-filters__option-text">{color}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="auto-filters__apply-btn">Применить фильтры</button>
    </div>
  );
};

export default AutoFilters;
