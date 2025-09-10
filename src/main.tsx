import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TesloShop } from './TesloShop';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TesloShop />
  </StrictMode>
);
