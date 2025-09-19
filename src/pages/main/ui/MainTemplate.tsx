import React from "react";

export function MainTemplate({children}: {children: React.ReactNode}) {
  return (
    <div>
      <header className="app-header">Логотип</header>
      {children}
      <footer className="app-footer">Слоган</footer>
    </div>
  );
}
