import DoctorsPage from "./pages/Doctors";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DoctorsPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
