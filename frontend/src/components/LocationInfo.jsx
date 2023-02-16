import React from 'react';
import {useSelector} from "react-redux";
import {getActivePoint} from "../store/selectors";
import "../styles/scss/LocationInfo.scss"

const LocationInfo = ({setSearch}) => {
  const {properties} = useSelector(getActivePoint);

  return (
    <div>
      <div className="info-header">
        <button
          onClick={() => setSearch(true)}
        >
          Find
        </button>
        <h4>{properties.name}</h4>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a nisl ac augue porttitor rutrum. Vestibulum finibus viverra mollis. Phasellus gravida nibh nunc. Praesent quis condimentum magna. Phasellus ornare diam ut neque viverra rhoncus. Integer dignissim ipsum at vulputate condimentum. Pellentesque luctus, augue quis ullamcorper dignissim, sapien mi convallis turpis, in tempus risus mi in justo. Quisque nisl dolor, aliquam et nibh sit amet, interdum fermentum nunc. Nulla pulvinar erat et nunc vestibulum, eu ullamcorper massa ultricies. Duis in nulla est. Nullam pellentesque feugiat libero et pretium. Fusce sed condimentum mi. Praesent varius eleifend cursus. Aliquam venenatis nulla rhoncus purus pretium vestibulum. Nullam eget purus porttitor turpis dignissim pharetra. Curabitur imperdiet est nec lorem consequat, in placerat mauris dignissim.
      </p>
    </div>
  );
};

export default LocationInfo;