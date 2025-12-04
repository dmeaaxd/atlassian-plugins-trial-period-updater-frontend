import './main.pcss';

import { presetGpnDefault, Theme } from '@consta/uikit/Theme';
import { reatomContext } from '@reatom/npm-react';
import { createRoot } from 'react-dom/client';

import { ctx } from '##/models/ctx';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <reatomContext.Provider value={ctx}>
    <Theme preset={presetGpnDefault}>
      <App />
    </Theme>
  </reatomContext.Provider>
);
