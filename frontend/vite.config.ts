import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/static/', // This ensures all asset paths start with /static/
  plugins: [react()],
});