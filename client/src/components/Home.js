
import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/patient"
          sx={{ marginTop: 15, background: "orangered" }}
          variant="contained"
        >
          <Typography variant="h3">View Patient Information</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;




content for app.js: 

import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddPatient from "./components/AddPatient";
import Patients from "./components/patient/Patients";
import About from "./components/About";
import PatientDetail from "./components/patient/PatientDetail";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddPatient />} exact />
          <Route path="/patient" element={<Patients/>} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/patient/:id" element={<PatientDetail  />} exact />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;