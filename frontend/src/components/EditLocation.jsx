import React from 'react';
import FloatingLabel from "../atoms/FloatingLabel";
import {useFormik} from "formik";

const EditLocation = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      description: ""
    }
  })

  return (
    <div
      className="edit-location"
    >
      <h4>Создать локацию</h4>
      <form>
        <FloatingLabel
          label="Location"
        >
          <input
            name="name"
            value={formik.values.attention}
            onChange={formik.handleChange}
            placeholder=" "
          />
        </FloatingLabel>
        <FloatingLabel
          label="Location"
        >
          <textarea
            name="description"
            value={formik.values.attention}
            onChange={formik.handleChange}
            placeholder=" "
            rows="30"
          />
        </FloatingLabel>
      </form>
      <div className="edit-location-footer">
        <button>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditLocation;