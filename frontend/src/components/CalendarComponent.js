import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = (props) => {
  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Calendar className="mb-2" onChange={onChange} value={value} />
    </div>
  );
};

export default CalendarComponent;
