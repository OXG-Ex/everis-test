import React from "react";

export function MainTemplate({children}: {children: React.ReactNode}) {
  return (
    <div>
      <header>Товары</header>
      <main>{children}</main>
      <footer>© 2025</footer>
    </div>
  );
}
