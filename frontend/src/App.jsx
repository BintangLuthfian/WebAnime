import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/LogReg/Login/Login";
import Regis from "./pages/LogReg/Register/Regis";
import Home from "./pages/home";
import List from "./pages/list";
import Daftar from "./pages/daftaranime";
import Ranting from "./pages/ranting"
import Bookmark from "./pages/bookmark";
import ProfileSetting from "./pages/settingPage/profilesetting";





function App() {
  return (
 <BrowserRouter>
     <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/regis" element={<Regis />} />
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List />} />
        <Route path="/daftaranime" element={<Daftar />} />
        <Route path="/ranting" element={<Ranting />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/profile" element={<ProfileSetting />} />
     </Routes>
 </BrowserRouter>
        );
        }

export default App;

//admin

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Dasboardadmin from "./admin/dasboardadmin";
// import Daftar from "./admin/daftar admin";
// import DataUser from "./admin/datauseradmin";
// import Setting from "./admin/settingadmin";

// function App() {
// return (
// <BrowserRouter>
// <Routes>
// <Route path="/" element={<Dasboardadmin />} />
// <Route path="/daftar" element={<Daftar />} />
// <Route path="/datauser" element={<DataUser />} />
// <Route path="/setting" element={<Setting />} />
// </Routes>
// </BrowserRouter>
// );
// }

// export default App;
