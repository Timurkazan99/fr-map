import React, {useEffect, useState} from 'react';
import "../styles/scss/SearchInput.scss"
import useDebounce from "../hooks/useDebounce";
import {useDispatch} from "react-redux";
import {setSearchTerm} from "../store/reducers/UiSlice";
import FloatingLabel from "../atoms/FloatingLabel";

const SearchInput = () => {

  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const debouncedSearchTerm = useDebounce(value, 1000);

  useEffect(() => {
    dispatch(setSearchTerm(debouncedSearchTerm));
    },
    [debouncedSearchTerm]
  );

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="search-input-group">
      <FloatingLabel
        label="Location"
      >
        <input
          value={value}
          placeholder=" "
          onChange={({target}) => {
            setValue(target.value);
          }}
        />
      </FloatingLabel>
      <div className={open ? "dropdown active" : "dropdown"}>
        <button onClick={handleOpen}>Filter</button>
        {
          open && (
            <ul className="menu">
              <li className="menu-item">
                <label><input type="checkbox"/> Cities</label>
              </li>
              <li className="menu-item">
                <label><input type="checkbox"/> Towns</label>
              </li>
            </ul>
          )
        }
      </div>
    </div>
  );
};

export default SearchInput;