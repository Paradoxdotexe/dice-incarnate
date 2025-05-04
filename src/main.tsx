import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'react-tooltip/dist/react-tooltip.css';
import { HomePage } from './pages/HomePage.tsx';
import { Provider as RxDBProvider } from 'rxdb-hooks';
import { Database, initDatabase } from './database/database.ts';
import { BrowserRouter, Routes, Route } from 'react-router';
import { CharacterPage } from './pages/CharacterPage.tsx';

const Root: React.FC = () => {
  const [db, setDb] = useState<Database>();

  useEffect(() => {
    initDatabase().then(setDb);
  }, []);

  return (
    <StrictMode>
      <RxDBProvider db={db}>
        {db && (
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/character/:characterId" element={<CharacterPage />} />
            </Routes>
          </BrowserRouter>
        )}
      </RxDBProvider>
    </StrictMode>
  );
};

createRoot(document.getElementById('root')!).render(<Root />);
