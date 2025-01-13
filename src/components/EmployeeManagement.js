import React, { useState } from 'react';
import styles from './EmployeeManagement.module.css';

const EmployeeManagement = () => {
  const [employees, setEmployees] = useState([
    { id: 1, name: 'John Doe', role: 'Manager', department: 'Operations', joinedDate: '2023-01-01', contactNumber: '1234567890', idNumber: 'EMP001', photo: null, cv: null, idCard: null, performance: 80, tenure: 12 },
    { id: 2, name: 'Jane Smith', role: 'Coordinator', department: 'Logistics', joinedDate: '2023-02-01', contactNumber: '0987654321', idNumber: 'EMP002', photo: null, cv: null, idCard: null, performance: 60, tenure: 6 },
  ]);
  const [newEmployee, setNewEmployee] = useState({ name: '', role: '', department: '', joinedDate: '', contactNumber: '', idNumber: '', photo: null, cv: null, idCard: null, performance: 0, tenure: 0 });
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Flag incomplete records and missing documents
  const isRecordComplete = (employee) => {
    return employee.name && employee.role && employee.department && employee.joinedDate && employee.contactNumber && employee.idNumber;
  };

  const isMissingDocuments = (employee) => {
    return !employee.photo || !employee.cv || !employee.idCard;
  };

  // Suggest training or role change based on performance and tenure
  const suggestTraining = (employee) => {
    if (employee.performance < 70) {
      return 'Suggested Training: Skill Improvement';
    }
    if (employee.tenure > 12 && employee.performance > 70) {
      return 'Suggested Role Change: Senior Position';
    }
    return '';
  };

  // Predict attrition risk based on performance and tenure
  const attritionRisk = (employee) => {
    if (employee.performance < 50 && employee.tenure < 12) {
      return 'High Attrition Risk';
    }
    return '';
  };

  const handleAddEmployee = () => {
    if (editingEmployee) {
      setEmployees(employees.map(emp => (emp.id === editingEmployee.id ? { ...editingEmployee, ...newEmployee } : emp)));
      setEditingEmployee(null);
    } else {
      setEmployees([...employees, { id: employees.length + 1, ...newEmployee }]);
    }
    setNewEmployee({ name: '', role: '', department: '', joinedDate: '', contactNumber: '', idNumber: '', photo: null, cv: null, idCard: null, performance: 0, tenure: 0 });
  };

  const handleEditEmployee = (employee) => {
    setNewEmployee(employee);
    setEditingEmployee(employee);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };

  const handleFileChange = (e, field) => {
    setNewEmployee({ ...newEmployee, [field]: e.target.files[0] });
  };

  return (
    <div className={styles.employeeContainer}>
      <h2>Employee Management</h2>
      <div className={styles.formGroup}>
        <input
          type="text"
          placeholder="Name"
          value={newEmployee.name}
          onChange={(e) => setNewEmployee({ ...newEmployee, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Role"
          value={newEmployee.role}
          onChange={(e) => setNewEmployee({ ...newEmployee, role: e.target.value })}
        />
        <input
          type="text"
          placeholder="Department"
          value={newEmployee.department}
          onChange={(e) => setNewEmployee({ ...newEmployee, department: e.target.value })}
        />
        <input
          type="date"
          placeholder="Joined Date"
          value={newEmployee.joinedDate}
          onChange={(e) => setNewEmployee({ ...newEmployee, joinedDate: e.target.value })}
        />
        <input
          type="text"
          placeholder="Contact Number"
          value={newEmployee.contactNumber}
          onChange={(e) => setNewEmployee({ ...newEmployee, contactNumber: e.target.value })}
        />
        <input
          type="text"
          placeholder="ID Number"
          value={newEmployee.idNumber}
          onChange={(e) => setNewEmployee({ ...newEmployee, idNumber: e.target.value })}
        />
        <input
          type="file"
          placeholder="Upload Photo"
          onChange={(e) => handleFileChange(e, 'photo')}
        />
        <input
          type="file"
          placeholder="Upload CV"
          onChange={(e) => handleFileChange(e, 'cv')}
        />
        <input
          type="file"
          placeholder="Upload ID Card"
          onChange={(e) => handleFileChange(e, 'idCard')}
        />
        <button onClick={handleAddEmployee} className={styles.button}>
          {editingEmployee ? 'Update Employee' : 'Add Employee'}
        </button>
      </div>
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Role</th>
              <th>Department</th>
              <th>Joined Date</th>
              <th>Contact Number</th>
              <th>ID Number</th>
              <th>CV</th>
              <th>ID Card</th>
              <th>Actions</th>
              <th>Suggestions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(employee => (
              <tr key={employee.id} className={isRecordComplete(employee) ? '' : styles.incompleteRecord}>
                <td>{employee.id}</td>
                <td>
                  {employee.photo ? (
                    <img
                      src={URL.createObjectURL(employee.photo)}
                      alt="Employee"
                      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    />
                  ) : (
                    'No Photo'
                  )}
                </td>
                <td>{employee.name}</td>
                <td>{employee.role}</td>
                <td>{employee.department}</td>
                <td>{employee.joinedDate}</td>
                <td>{employee.contactNumber}</td>
                <td>{employee.idNumber}</td>
                <td>
                  {employee.cv ? (
                    <a href={URL.createObjectURL(employee.cv)} target="_blank" rel="noopener noreferrer">View CV</a>
                  ) : (
                    'Not Uploaded'
                  )}
                </td>
                <td>
                  {employee.idCard ? (
                    <a href={URL.createObjectURL(employee.idCard)} target="_blank" rel="noopener noreferrer">View ID</a>
                  ) : (
                    'Not Uploaded'
                  )}
                </td>
                <td>
                  <button onClick={() => handleEditEmployee(employee)} className={styles.button}>Edit</button>
                  <button onClick={() => handleDeleteEmployee(employee.id)} className={styles.button}>Delete</button>
                </td>
                <td>
                  {isMissingDocuments(employee) && (
                    <div className={styles.missingDocument}>Missing Documents</div>
                  )}
                  {suggestTraining(employee) && (
                    <div className={styles.suggestedTraining}>{suggestTraining(employee)}</div>
                  )}
                  {attritionRisk(employee) && (
                    <div className={styles.attritionRisk}>{attritionRisk(employee)}</div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeManagement;
