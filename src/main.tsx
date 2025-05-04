import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'react-tooltip/dist/react-tooltip.css';
import { HomePage } from './pages/HomePage.tsx';
import { Provider as RxDBProvider } from 'rxdb-hooks';
import { initDatabase } from './database/database.ts';
import { BrowserRouter, Routes, Route } from 'react-router';
import { CharacterPage } from './pages/CharacterPage.tsx';

const db = await initDatabase();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RxDBProvider db={db}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:characterId" element={<CharacterPage />} />
        </Routes>
      </BrowserRouter>
    </RxDBProvider>
  </StrictMode>
);
