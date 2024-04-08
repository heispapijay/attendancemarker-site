import React, { useState } from "react";

const StudentList = ({ students, handleSelectStudent }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    const filteredStudents = students.filter(student => {
        return student.matricNo.toLowerCase().startsWith(searchTerm.toLowerCase());
    });

    return (
        <div>
            <input className="search-bar"
                type="text"
                placeholder="Search by matric number"
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="student-list">
                <table>
                    <thead>
                        <tr>
                            <th>Matric No</th>
                            <th>Full Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student) => (
                            <tr key={student.matricNo}>
                                <td>{student.matricNo}</td>
                                <td>{student.fullName}</td>
                                <td>
                                    <button onClick={() => handleSelectStudent(student)}>
                                        Mark Attendance
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StudentList;
