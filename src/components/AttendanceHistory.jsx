import React from "react";

const AttendanceHistory = ({ presentStudents, absentStudents, handleClearHistory, handleExportData }) => {
  return (
    <div>
      <h2>Present Students</h2>
      <ul>
        {presentStudents.map((student) => (
          <li key={student.matricNo}>{student.fullName}</li>
        ))}
      </ul>
      <h2>Absent Students</h2>
      <ul>
        {absentStudents.map((student) => (
          <li key={student.matricNo}>{student.fullName}</li>
        ))}
      </ul>
      <button onClick={handleClearHistory}>Clear History</button>
      <button onClick={handleExportData}>Export Data</button>
    </div>
  );
};

export default AttendanceHistory;
