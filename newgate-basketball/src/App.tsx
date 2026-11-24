// src/App.tsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import MainMenu from '@/ui/menus/MainMenu';
import PlayPage from '@/ui/pages/PlayPage';
import GameModesPage from '@/ui/pages/GameModesPage';
import CharactersPage from '@/ui/pages/CharactersPage';
import LeaderboardPage from '@/ui/pages/LeaderboardPage';
import ProfilePage from '@/ui/pages/ProfilePage';
import SettingsPage from '@/ui/pages/SettingsPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainMenu />} />
      <Route path="/play" element={<PlayPage />} />
      <Route path="/gamemodes" element={<GameModesPage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/leaderboard" element={<LeaderboardPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/settings" element={<SettingsPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
