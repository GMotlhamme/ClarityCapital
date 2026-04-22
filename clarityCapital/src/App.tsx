import { BrowserRouter, Route, Routes } from "react-router"
import Landing from "./pages/Landing"
import Login from "./pages/LogIn"
import Register from "./pages/Register"
// import ProtectedRoute from "./utils/ProtectedRoute"
import PaymentGate from "./pages/PaymentGate"

function App() {

  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          
            <Route path="/PaymentGate" element={<PaymentGate />} />
            {/* <Route path="/PaymentGate" element={<ProtectedRoute><PaymentGate /></ProtectedRoute>} /> */}

       
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
