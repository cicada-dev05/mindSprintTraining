import { Routes, Route, Link } from "react-router-dom";

function Profile() {
  return <h1>Profile Component</h1>;
}
function Setting() {
  return <h1>Setting Component</h1>;
}
function Newsfunc() {
  return (
    <>
      <h1>Dashboard Component</h1>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <ul className="nav nav-tabs">
      <li className="nav-item">
          <Link to="Profile">Profile</Link>
        </li>
        <li className="nav-item">
          <Link to="Setting">Setting</Link>
        </li>
      </ul>
      </nav>
      <Routes>
        <Route path="Profile" element={<Profile />} />
        <Route path="Setting" element={<Setting />} />
      </Routes>
    </>
  );
}

export default Newsfunc;
