import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmailVerification from "./pages/EmailVarifaction";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/email-verification" element={<EmailVerification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;