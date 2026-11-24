// src/ui/menus/MainMenu.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  { to: '/play', label: 'Play' },
  { to: '/gamemodes', label: 'Game Modes' },
  { to: '/characters', label: 'Characters' },
  { to: '/leaderboard', label: 'Leaderboard' },
  { to: '/profile', label: 'Profile' },
  { to: '/settings', label: 'Settings' },
];

const MainMenu: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-dark text-light">
      <h1 className="text-5xl font-bold mb-12 text-primary">Newgate Basketball Arena</h1>
      <nav className="flex flex-col space-y-4 w-64">
        {menuItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className="px-6 py-3 text-center bg-primary rounded hover:bg-primary/80 transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MainMenu;
