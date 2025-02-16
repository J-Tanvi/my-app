// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";  // This is where child components will render

const Layout = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/diary">Diary</a></li>
            <li><a href="/contact-us">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />  {/* This is where child components (like Home, Diary, etc.) render */}
      </main>
    </div>
  );
};

export default Layout;

/*
import {Outlet} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Suspense } from "react";

export default function Layout() {
    return (
        <>
            <Header />
            <main>
                <Suspense fallback = {<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer />
        </>
    )
}
    */