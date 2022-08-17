import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Dashboard from './Dashboard';
import TradesmanDetails from './TradesmanDetails';

function App() {
  return (
    <div>
      <Header />
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