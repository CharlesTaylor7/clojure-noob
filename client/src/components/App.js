import React from 'react';
import './App.css';
import { Grid } from './Grid';

export const App = () => {
  return (
    <div className="app">
      <header className="header">Welcome to Sudoku!</header>
      <Grid />
    </div>
  );
}
