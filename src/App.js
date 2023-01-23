import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";
import UploadJiraItems from "./components/upload-jiraItems/UploadJiraItems";
import Backlog from "./components/backlog/Backlog";
import ActiveSprints from "./components/active-sprints/ActiveSprints";
import ClosedSprints from "./components/closed_sprints/ClosedSprints";
//import ErrorPage from "./components/error-page/ErrorPage";
import { Routes, Route } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <div className="row">
        <NavBar />
        <Routes>
          <Route path='/backlog' element={<Backlog />}></Route>
          <Route path='/upload-jira-items' element={<UploadJiraItems />}></Route>
          <Route path='/active-sprint' element={<ActiveSprints />}></Route>
          <Route path='/closed-sprints' element={<ClosedSprints />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
