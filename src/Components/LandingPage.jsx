import React, { useState } from 'react';
import { Button } from '@mui/material';
import './LandingPage.css';
import {AddTaskDialogBox} from './AddTaskDialogBox';

export const LandingPage = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className="landing-page">
      <h1>Alpha Habits</h1>
      <Button className="AddNewTask-btn" onClick={handleOpenDialog}>
        Add new task
      </Button>
      <AddTaskDialogBox open={isDialogOpen} handleClose={handleCloseDialog} />
    </div>
  );
};
