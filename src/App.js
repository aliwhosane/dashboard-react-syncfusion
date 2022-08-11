import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
// Css import
import "./App.css";
// Component import
import { Sidebar, Footer, ThemeSettings, Navbar } from "./components";
import { Dashboard, Employee } from "./pages";
// Context import
import { useContextState } from "./contexts/ContextProvider";

const App = () => {
  const { activeMenu } = useContextState();
  return (
    <>
      <div>
        <Router>
          <div className="flex relative dark:bg-main-dark-bg">
            <div className="fixed right-4 bottom-4">
              <TooltipComponent content="Settings" position="Top">
                <button
                  type="button"
                  className="text-2xl p-3 hover:drop-shadow-sm hover:bg-light-gray text-white"
                  style={{ background: "gray", borderRadius: "50%" }}
                >
                  <FiSettings />
                </button>
              </TooltipComponent>
            </div>
            {activeMenu ? (
              <div className="w-64 fixed sidebar dark:bg-secondary-dark-bg bg-white">
                <Sidebar />
              </div>
            ) : (
              <div className="w-0 dark:bg-secondary-dark-bg">
                <Sidebar />
              </div>
            )}
            <div
              className={`dark:bg-main-bg w-full min-h-screen bg-main-bg
                ${activeMenu ? " md:ml-64" : "flex-2"}`}
            >
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
                <Navbar />
              </div>
              <div>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/orders" element={<h1>Orders</h1>} />
                  <Route path="/employees" element={<Employee />} />
                  <Route path="/kanban" element={<h1>Kanban</h1>} />
                  <Route path="/editor" element={<h1>Editor</h1>} />
                  <Route path="/calendar" element={<h1>Calendar</h1>} />
                  <Route path="/color-picker" element={<h1>Color Picker</h1>} />
                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;
