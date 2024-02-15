import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import Main from "./components/Main";
import NotFound from "./components/NotFound";

import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => (
    <div>

            <BrowserRouter>
              <Routes>


                <Route path="/:filter?" element={<Main />} />
                {/*<Route path="/:filter?" element={<Main />?: <NotFound>} />*/}
                <Route path="/done" element={<Main />} />
                <Route path="/not-done" element={<Main />} />


              </Routes>

            </BrowserRouter>

    </div>
)




// ReactDOM.render(<Main />, document.getElementById("app"));
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);