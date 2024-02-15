import React from 'react';
import { Root } from './Root';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<Root />);
