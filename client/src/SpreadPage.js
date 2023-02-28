import { BrowserRouter as Routes, Route } from 'react-router-dom';
import './App.css'
import React from 'react';

function SpreadPage() {

  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/nhl/connect").then((res) => res.json()).then((data) => setData(data.message));
    console.log(data);
  })
  return (
    <>
    <div className="App">
      <header className="App-header">
      <Routes>
          <Route exact path="/spread" element={<SpreadPage />} />
          {/* <Route exact path="/contact" element={<Contact />} /> */}
      </Routes>
      </header>
    </div>
    </>

  );
}

export default SpreadPage;
