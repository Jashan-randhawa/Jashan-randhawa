import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Protectroute from "./component/auth/Protectroute";
import Loaders from "./component/layout/Loaders";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Group = lazy(() => import("./pages/Group"));
const Notfound = lazy(() => import("./pages/Notfound"));
let user = true;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<Loaders />}>
          <Routes>
            <Route element={<Protectroute user={user} />}>
              <Route path="/" element={<Home />} />
              <Route path="/chat/:chatid" element={<Chat />} />
              <Route path="/group" element={<Group />} />
            </Route>
            <Route
              path="/login"
              element={
                <Protectroute user={!user} redirect="/">
                  <Login />
                </Protectroute>
              }
            />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
