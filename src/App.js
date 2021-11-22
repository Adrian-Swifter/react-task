import "./App.css";
import Posts from "./components/Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from "./components/routes/SinglePost";
import EditSinglePost from "./components/routes/EditSinglePost";
import CreateSinglePost from "./components/routes/CreateSinglePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/:id" element={<SinglePost />} />
          <Route path="/:id/edit" element={<EditSinglePost />} />
          <Route path="/create" element={<CreateSinglePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
