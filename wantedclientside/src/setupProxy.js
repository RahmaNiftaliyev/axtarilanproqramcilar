/* A proxy server. */
// Language: javascript
// Path: src\setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

const context = ['/api'];

module.exports = function (app) {
  const appProxy = createProxyMiddleware(context, {
    target: 'https://localhost:3000',
    secure: true,
    changeOrigin: true,
    logLevel: 'debug',
    onProxyRes: (proxyRes, req, res) => {
      proxyRes.headers['Access-Control-Allow-Origin'] = '*';
      req.headers['Access-Control-Allow-Origin'] = '*';

      if (proxyRes.statusCode === 502) {
        res.writeHead(proxyRes.statusCode, proxyRes.headers);
        res.end('Proxy error');
      }

      if (proxyRes.headers['set-cookie']) {
        proxyRes.headers['set-cookie'] = proxyRes.headers['set-cookie'].map((cookie) => {
          return cookie.replace(/path=\/api/g, 'path=/');
        });
      } else {
        proxyRes.headers['set-cookie'] = [];
      }

      if (proxyRes.headers['location']) {
        proxyRes.headers['location'] = proxyRes.headers['location'].replace(/^\/api/, '');
      } else if (proxyRes.headers['location'] === '/') {
        proxyRes.headers['location'] = '/';
      } else {
        proxyRes.headers['location'] = '/';
      }

      if (proxyRes.headers['content-location']) {
        proxyRes.headers['content-location'] = proxyRes.headers['content-location'].replace(
          /^\/api/,
          ''
        );
      } else if (proxyRes.headers['content-location'] === '') {
        proxyRes.headers['content-location'] = '/';
      } else {
        proxyRes.headers['content-location'] = '/';
      }
    },
  });

  app.use(appProxy);
};
