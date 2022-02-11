import * as React from "react";
import Link from "../components/link";

const Layout = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about">Portfolio</Link>
          <Link href="/about">Contact</Link>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
