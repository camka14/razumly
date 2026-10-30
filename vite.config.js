import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'vite';

const documentRoutes = new Set(
  readdirSync(new URL('./public/', import.meta.url), { recursive: true })
    .map((file) => file.replaceAll('\\', '/'))
    .filter((file) => file.endsWith('/index.html'))
    .map((file) => `/${file.slice(0, -'/index.html'.length)}`),
);
const appleAssociation = readFileSync(
  new URL('./public/.well-known/apple-app-site-association', import.meta.url),
);

// Match production directory indexes and the extensionless app-link JSON locally.
function staticDocuments(server) {
  server.middlewares.use((request, response, next) => {
    const url = new URL(request.url, 'http://localhost');
    if (url.pathname === '/.well-known/apple-app-site-association') {
      response.setHeader('Content-Type', 'application/json');
      response.end(request.method === 'HEAD' ? undefined : appleAssociation);
      return;
    }
    const pathname = url.pathname.replace(/\/$/, '');
    if (documentRoutes.has(pathname)) {
      request.url = `${pathname}/index.html${url.search}`;
    }
    next();
  });
}

export default defineConfig({
  appType: 'mpa',
  plugins: [{
    name: 'static-documents',
    configureServer: staticDocuments,
    configurePreviewServer: staticDocuments,
  }],
  server: {
    fs: {
      deny: ['.env', '.env.*', '*.{crt,pem}', '**/.git/**', '**/app/**'],
    },
  },
});
