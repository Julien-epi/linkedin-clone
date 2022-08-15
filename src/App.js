import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";


function App() {
  return (
    <div className="app">
      <Header />

      {/* App body */}
      <div className="app_body">
        <Sidebar />
      <Feed />
      </div>


      {/* Widgets */}
    </div>
  );
}

export default App;
