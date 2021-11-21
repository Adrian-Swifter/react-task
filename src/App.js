import "./App.css";
import Posts from "./components/Posts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from "./components/post/SinglePost";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/:id" element={<SinglePost />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
