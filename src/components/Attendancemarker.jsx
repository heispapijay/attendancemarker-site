import React, { useState, useEffect } from "react";
import { saveAs } from "file-saver";
import { StudentList, Form, AttendanceHistory } from "./index";

const AttendanceMarker = () => {
  const [students, setStudents] = useState([]);
  const [presentStudents, setPresentStudents] = useState([]);
  const [absentStudents, setAbsentStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("students");
    const savedPresent = localStorage.getItem("presentStudents");
    const savedAbsent = localStorage.getItem("absentStudents");
    if (savedData) {
      setStudents(JSON.parse(savedData));
    } else {e
      fetch("./students.json")
        .then((response) => response.json())
        .then((data) => {
          setStudents(data);
          localStorage.setItem("students", JSON.stringify(data));
        });
    }
    if (savedPresent) {
      setPresentStudents(JSON.parse(savedPresent));
    }
    if (savedAbsent) {
      setAbsentStudents(JSON.parse(savedAbsent));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("presentStudents", JSON.stringify(presentStudents));
    localStorage.setItem("absentStudents", JSON.stringify(absentStudents));
  }, [presentStudents, absentStudents]);

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
  };

  const handleMarkAttendance = (status) => {
    const updatedStudents = students.filter(
      (student) => student.matricNo !== selectedStudent.matricNo
    );
    setStudents(updatedStudents);

    if (status === "present") {
      setPresentStudents([...presentStudents, selectedStudent]);
    } else if (status === "absent") {
      setAbsentStudents([...absentStudents, selectedStudent]);
    }
  };

  const handleClearHistory = () => {
    setPresentStudents([]);
    setAbsentStudents([]);
  };

  const handleExportData = () => {
    const dataToExport = {
      presentStudents: presentStudents.map((student) => student.fullName),
      absentStudents: absentStudents.map((student) => student.fullName),
    };
    const content = `
  Present Students:
  ${dataToExport.presentStudents.join("\n")}
  
  Absent Students:
  ${dataToExport.absentStudents.join("\n")}
  `;

    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(blob, "attendance_data.txt");
  };

  return (
    <div className="wrapper">
      <h1>Attendance Marker</h1>
      <StudentList
        students={students}
        handleSelectStudent={handleSelectStudent}
      />
      {selectedStudent && (
        <Form
          selectedStudent={selectedStudent}
          handleMarkAttendance={handleMarkAttendance}
        />
      )}
      <AttendanceHistory
        presentStudents={presentStudents}
        absentStudents={absentStudents}
        handleClearHistory={handleClearHistory}
        handleExportData={handleExportData}
      />
    </div>
  );
};

export default AttendanceMarker;