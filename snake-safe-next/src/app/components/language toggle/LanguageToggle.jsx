
'use client';

import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from "../../store/languageSlice"
import "./language-toggle.css";

export default function LanguageToggle() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const handleDropdownChange = (e) => {
    const selectedLanguage = e.target.value;
    dispatch(setLanguage(selectedLanguage));
  };

  return (
    <div className="toggle-container">
      <select
        value={language}
        onChange={handleDropdownChange}
        className="toggle-select"
        aria-label="Select Language"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
      </select>
    </div>
  );
}
