import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import CreatePost from "./pages/CreatePost";
import Feed from "./pages/Feed";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* When user hits "/", it automatically redirects to "/create-post" */}
          {/* "replace" prevents extra history entry (better UX)  */}
          <Route path="/" element={<Navigate to="/create-post" replace />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/feed" element={<Feed />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
};

export default App;
