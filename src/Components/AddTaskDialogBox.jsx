import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";

export const AddTaskDialogBox = ({ open, handleClose }) => {
  const [habitListDetails, setHabitListDetails] = useState({
    name: "",
    repeat: "",
    goal: "",
    time: "",
    startDate: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    // console.log(habitDetails);
    handleClose();
  };

  return (
    <div className="addTaskContainer">
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Habbit</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} className="habit-form">
            <label htmlFor="name">Habit Name: </label>
            <input
              type="text"
              name="Name"
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
            <select name="repeat" className="repeat-valueSelectOption">
              <option value="daily">Daily</option>
              <option value="alternate-days">Alternate Days</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>

            <label htmlFor="goal">Goal </label>
            <select name="goal" className="no-of-times">
              <option value="once">1 times</option>
              <option value="weekly">2 times</option>
            </select>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
