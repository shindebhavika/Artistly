"use client";
import { useState, useRef, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

export default function MultiSelectDropdown({
  label,
  options = [],
  selected = [],
  setSelected,
  placeholder = "Select...",
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const dropdownRef = useRef(null);

  const toggleOption = (option) => {
    if (selected.includes(option)) {
      setSelected(selected.filter((o) => o !== option));
    } else {
      setSelected([...selected, option]);
    }
  };

  const filtered = options.filter((opt) =>
    opt.toLowerCase().includes(query.toLowerCase())
  );

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full relative" ref={dropdownRef}>
      <label className="block text-sm font-medium  mb-1">{label}</label>

      {/* Trigger Box */}
      <div
        className="w-full border rounded-md px-3 py-2 cursor-pointer shadow-sm "
        onClick={() => setOpen(!open)}
      >
        {selected.length ? (
          <span className="text-sm ">{selected.join(", ")}</span>
        ) : (
          <span className="text-sm ">{placeholder}</span>
        )}
      </div>

      {/* Dropdown Panel */}
      {open && (
        <div className="absolute mt-1 w-full sm:w-96  border rounded-md shadow-lg z-50 max-h-64 overflow-y-auto ">
          {/* Search Box */}
          <div className="p-2 sticky top-0  z-10 border-b">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full px-2 py-1 border rounded-md text-sm focus:ring-1 focus:ring-purple-500"
            />
          </div>

          {/* Options */}
          <ul className="divide-y text-sm ">
            {filtered.length === 0 ? (
              <li className="p-2 ">No options found</li>
            ) : (
              filtered.map((option, index) => (
                <li
                  key={index}
                  className="flex items-center px-3 py-2  cursor-pointer"
                  onClick={() => toggleOption(option)}
                >
                  <input
                    type="checkbox"
                    checked={selected.includes(option)}
                    onChange={() => toggleOption(option)}
                    className="mr-2 border-neutral-50"
                  />
                  <span>{option}</span>
                  {selected.includes(option) && (
                    <CheckIcon className="w-4 h-4 text-purple-600 ml-auto" />
                  )}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
