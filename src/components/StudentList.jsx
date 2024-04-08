import React, { useState } from "react";

const StudentList = ({ students, handleSelectStudent }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by matric number"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul>
        {students
          .filter((student) =>
            student.matricNo.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((student) => (
            <li key={student.matricNo}>
              <span>{student.matricNo}</span>{" "}
              <span>{student.fullName}</span>{" "}
              <button onClick={() => handleSelectStudent(student)}>
                Mark Attendance
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default StudentList;
