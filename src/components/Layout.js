import {Outlet} from "react-router-dom";
import { Suspense } from "react";

export default function Layout() {
    return (
        <>
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
                <Suspense fallback = {<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}
