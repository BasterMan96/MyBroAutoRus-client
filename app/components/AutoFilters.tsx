"use client";

import React, { useState, useEffect } from "react";

interface ActiveFilters {
  bodyType: string;
  engine: string;
  transmission: string;
  drive: string;
  color: string;
}

interface AutoFiltersProps {
  onFiltersChange?: (filters: ActiveFilters) => void;
  currentFilters?: ActiveFilters;
}

const AutoFilters: React.FC<AutoFiltersProps> = ({
  onFiltersChange,
  currentFilters,
}) => {
  const [selectedBodyType, setSelectedBodyType] = useState<string>(
    currentFilters?.bodyType || ""
  );
  const [selectedEngine, setSelectedEngine] = useState<string>(
    currentFilters?.engine || ""
  );
  const [selectedTransmission, setSelectedTransmission] = useState<string>(
    currentFilters?.transmission || ""
  );
  const [selectedDrive, setSelectedDrive] = useState<string>(
    currentFilters?.drive || ""
  );
  const [selectedColor, setSelectedColor] = useState<string>(
    currentFilters?.color || ""
  );

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

  useEffect(() => {
    const filters: ActiveFilters = {
      bodyType: selectedBodyType,
      engine: selectedEngine,
      transmission: selectedTransmission,
      drive: selectedDrive,
      color: selectedColor,
    };

    if (onFiltersChange) {
      onFiltersChange(filters);
    }
  }, [
    selectedBodyType,
    selectedEngine,
    selectedTransmission,
    selectedDrive,
    selectedColor,
    onFiltersChange,
  ]);

  useEffect(() => {
    if (currentFilters) {
      setSelectedBodyType(currentFilters.bodyType || "");
      setSelectedEngine(currentFilters.engine || "");
      setSelectedTransmission(currentFilters.transmission || "");
      setSelectedDrive(currentFilters.drive || "");
      setSelectedColor(currentFilters.color || "");
    }
  }, [
    currentFilters?.bodyType,
    currentFilters?.engine,
    currentFilters?.transmission,
    currentFilters?.drive,
    currentFilters?.color,
  ]);

  const handleBodyTypeChange = (type: string) => {
    setSelectedBodyType(selectedBodyType === type ? "" : type);
  };

  const handleEngineChange = (engine: string) => {
    setSelectedEngine(selectedEngine === engine ? "" : engine);
  };

  const handleTransmissionChange = (transmission: string) => {
    setSelectedTransmission(
      selectedTransmission === transmission ? "" : transmission
    );
  };

  const handleDriveChange = (drive: string) => {
    setSelectedDrive(selectedDrive === drive ? "" : drive);
  };

  const handleColorChange = (color: string) => {
    setSelectedColor(selectedColor === color ? "" : color);
  };

  return (
    <div className="auto-filters">
      <h3 className="auto-filters__title">Фильтры</h3>

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
                onChange={(e) => handleBodyTypeChange(e.target.value)}
                className="auto-filters__radio"
              />
              <span className="auto-filters__option-text">{type}</span>
            </label>
          ))}
        </div>
      </div>

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
                onChange={(e) => handleEngineChange(e.target.value)}
                className="auto-filters__radio"
              />
              <span className="auto-filters__option-text">{engine}</span>
            </label>
          ))}
        </div>
      </div>

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
                onChange={(e) => handleTransmissionChange(e.target.value)}
                className="auto-filters__radio"
              />
              <span className="auto-filters__option-text">{transmission}</span>
            </label>
          ))}
        </div>
      </div>

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
                onChange={(e) => handleDriveChange(e.target.value)}
                className="auto-filters__radio"
              />
              <span className="auto-filters__option-text">{drive}</span>
            </label>
          ))}
        </div>
      </div>

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
                onChange={(e) => handleColorChange(e.target.value)}
                className="auto-filters__radio"
              />
              <span className="auto-filters__option-text">{color}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AutoFilters;
