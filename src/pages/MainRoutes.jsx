import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import ResultPage from "./ResultPage";
import { Heading } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

const MainRoutes = () => {
     return (
          <React.Fragment>
               <Navbar />
               <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/result-page" element={<ResultPage />} />
                    <Route
                         path="*"
                         element={<Heading>Page Not Found</Heading>}
                    />
               </Routes>
          </React.Fragment>
     );
};

export default MainRoutes;
