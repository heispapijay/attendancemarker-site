import React from "react";

const Form = ({ selectedStudent, handleMarkAttendance }) => {
  return (
    <div>
      <h2>Mark Attendance for {selectedStudent.fullName}</h2>
      <button className="export-btn" onClick={() => handleMarkAttendance("present")}>
        Present
      </button>
      <button className="clear-btn" onClick={() => handleMarkAttendance("absent")}> Absent</button>
    </div>
  );
};

export default Form;
