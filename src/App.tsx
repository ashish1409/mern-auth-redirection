import { BrowserRouter,Routes,Route } from "react-router-dom"

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/reset-password" element={<div>Reset Password</div>} />
      <Route path="/email-verification" element={<div>Email Verification</div>} />
    </Routes>
   </BrowserRouter>
  )
}

export default App