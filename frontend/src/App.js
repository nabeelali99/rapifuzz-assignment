import "./App.css";
import { Layout } from "./Components/Layout";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
// import { Loginpage } from "./Pages/Loginpage";
// import { RegisterPage } from "./Pages/RegisterPage";
import { UserContextProvider } from "./Context/UserContext";
// import { CreatePost } from "./Pages/CreatePost";
// import { PostPage } from "./Pages/PostPage";
// import { EditPost } from "./Pages/EditPost";
// import { ProfilePage } from "./Pages/ProfilePage";
import { ToastContainer } from "react-toastify";
import { ForgotPassword } from "./Pages/ForgotPassword";
import { LandingPage } from "./Pages/LandingPage";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<HomePage />} />
          {/* <Route path={"/login"} element={<Loginpage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/logout"} element={<Loginpage />} />
          <Route path={"/create"} element={<CreatePost />} />
          <Route path={"/post/:id"} element={<PostPage />} />
          <Route path={"/edit/:id"} element={<EditPost />} /> */}
          {/* <Route path={"/profile"} element={<ProfilePage />} /> */}
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/HomePage" element={<HomePage />} />
        </Route>
      </Routes>
      {/* <Route path={"/"} element={<HomePage />}></Route> */}
      <ToastContainer />
    </UserContextProvider>
  );
}

export default App;
