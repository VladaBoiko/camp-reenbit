import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "./components/Layout";
const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const CardDetail = lazy(() => import("./pages/CardDetails/CardDetails"));
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/:id" element={<CardDetail />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
