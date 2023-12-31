import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import ProtectedRoute from "./Helpers/ProtectedRoute"
import { useStore } from "./Helpers/Store"

/** Layouts */
import Layout1 from "./Layouts/Layout1"
import Layout2 from "./Layouts/Layout2"

/** Error */
import Error404 from "./Pages/Error404"

/** Pages - PUBLIC */
import Home from "./Pages/Home"
import Blogs from "./Pages/Blogs"
import Login from "./Pages/Login"
import Contact from "./Pages/Contact"

/** Auth */
import SignIn from "./Pages/SignIn"


/** Pages - PRIVATE */
import Dashboard from "./Pages/Dashboard"
import MyAccount from "./Pages/MyAccount"
import Client from "./Pages/Client"

/** Font Awesome **/
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

export default function App() {
  const [user, setUser] = useState(false); // simulate user object
  const isLoggedIn = useStore(state => state.isLoggedIn)

  return (
    <BrowserRouter>
      <Routes>

      <Route path="sign-in" element={<SignIn />} />

        <Route element={<Layout1 />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Error404 />} />

          <Route element={<ProtectedRoute user={isLoggedIn} />}>
              <Route path="/my_account" element={<MyAccount />} />
              <Route path="/clients" element={<Client />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>



      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
