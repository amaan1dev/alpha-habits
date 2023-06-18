import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

import "./AddTaskForm.css";

// Updated HabitRecord component
const HabitRecord = ({ habit, onEdit, onDelete }) => {
  return (
    <div>
      <h2>Habit Record</h2>
      <p>Name: {habit.name}</p>
      <p>Repeat: {habit.repeat}</p>
      <p>Goal: {habit.goal}</p>
      <p>Start Date: {habit.startDate}</p>
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
};

// Updated AddTaskDialogBox component
export const AddTaskDialogBox = ({ open, handleClose }) => {
  const [habitList, setHabitList] = useState([]);
  const [habitListDetails, setHabitListDetails] = useState({
    name: "",
    repeat: "",
    goal: "",
    time: "",
    startDate: "",
  });
  const [editingIndex, setEditingIndex] = useState(-1);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHabitListDetails((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new habit record using the form data
    const newHabitRecord = {
      name: habitListDetails.name,
      repeat: habitListDetails.repeat,
      goal: habitListDetails.goal,
      time: habitListDetails.time,
      startDate: habitListDetails.startDate,
    };
    
    if (editingIndex === -1) {
      // Add the new habit record to the habitList array
      setHabitList((prevHabitList) => [...prevHabitList, newHabitRecord]);
    } else {
      // Edit the existing habit record in the habitList array
      setHabitList((prevHabitList) => {
        const updatedHabitList = [...prevHabitList];
        updatedHabitList[editingIndex] = newHabitRecord;
        return updatedHabitList;
      });
      setEditingIndex(-1);
    }
    
    setHabitListDetails({
      name: "",
      repeat: "",
      goal: "",
      time: "",
      startDate: "",
    });
  };

  const handleEdit = (index) => {
    const habitToEdit = habitList[index];
    setHabitListDetails(habitToEdit);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    setHabitList((prevHabitList) => {
      const updatedHabitList = [...prevHabitList];
      updatedHabitList.splice(index, 1);
      return updatedHabitList;
    });
  };

  return (
    <div className="addTaskContainer">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Habit</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} className="habit-form">
            <label htmlFor="name">Habit Name: </label>
            <input
              type="text"
              name="name"
              value={habitListDetails.name}
              onChange={handleInputChange}
              placeholder="Enter Habit here"
            />

            <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={habitListDetails.startDate}
              onChange={handleInputChange}
            />

            <label htmlFor="repeat">Repeat </label>
            <select
              name="repeat"
              className="repeat-valueSelectOption"
              value={habitListDetails.repeat}
              onChange={handleInputChange}
            >
              <option value="daily">Daily</option>
              <option value="alternate-days">Alternate Days</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>

            <label htmlFor="goal">Goal </label>
            <select
              name="goal"
              className="no-of-times"
              value={habitListDetails.goal}
              onChange={handleInputChange}
            >
              <option value="once">1 time</option>
              <option value="weekly">2 times</option>
            </select>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit} color="primary">
            {editingIndex === -1 ? "Add" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Render all habit records */}
      {habitList.map((habit, index) => (
        <HabitRecord
          key={index}
          habit={habit}
          onEdit={() => handleEdit(index)}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};
