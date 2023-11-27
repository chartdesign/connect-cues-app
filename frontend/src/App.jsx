import Layout from "./components/Layout";
import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}></Route>
      </Routes>
    </>
  );
}
