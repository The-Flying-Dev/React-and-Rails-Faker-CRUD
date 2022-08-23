import React from "react";
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import TradesmanDetails from './TradesmanDetails';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes.background}>     
      <main>
        <Routes>
          <Route index element={<Dashboard />} /> {/* using index, as dashboard is a child route  with no path, it renders at the App's url */}
          <Route path='/tradesmen/:id/*' element={<TradesmanDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;