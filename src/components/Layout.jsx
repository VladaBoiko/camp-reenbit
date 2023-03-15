import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import { GlobalStyle } from "./GlobalStyle";

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
