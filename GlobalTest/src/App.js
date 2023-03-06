import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import ContextModalPage from "./store/2_context";
import AllUserList from "./store/3_context";

function App() {
    return (
        <>
            <AllUserList />
            <ContextModalPage>
                <RouterProvider router={router} />
            </ContextModalPage>
        </>
    );
}

export default App;
