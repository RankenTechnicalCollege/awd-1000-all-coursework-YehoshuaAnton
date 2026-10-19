import express from 'express';
import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();          // create the app 
app.use(cors());                // register CORS middleware

// create the proxy options 
const options = {
  router: (req) => req.path.substring(1),
  changeOrigin: true
};

// register the proxy middleware
app.use(createProxyMiddleware(options));

// start the server
app.listen(8088, () => {
  console.info('Proxy server is running on port 8088')
});