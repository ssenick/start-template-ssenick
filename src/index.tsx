import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import './index.scss';

const container = document.getElementById('root');
if (!container) throw new Error('Failed to mount the application, check the container!');

const root = createRoot(container);

root.render(<App />);
