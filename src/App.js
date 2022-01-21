import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Routes/main/Main";
import Login from "./Routes/login/Login";
import BookDetail from "./Routes/bookDetail/BookDetail";
import Signup from "./Routes/signUp/Signup";
import Profile from "./Routes/profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Main />}/>
        <Route path={`${process.env.PUBLIC_URL}/login`} element={<Login />} />
        <Route
          path={`${process.env.PUBLIC_URL}/books`}
          element={<BookDetail />}
        />
        <Route path={`${process.env.PUBLIC_URL}/signUp`} element={<Signup/>}/>
        <Route path={`${process.env.PUBLIC_URL}/profile`} element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
