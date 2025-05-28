import React from 'react';

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <header>
        <h1>My Application</h1>
        {/* Add navigation or header content here */}
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 My Application. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
