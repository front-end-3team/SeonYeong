import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import ContextModalPage from "./store/2_context";

function App() {
    return (
        <>
            <ContextModalPage>
                <RouterProvider router={router} />
            </ContextModalPage>
        </>
    );
}

export default App;
