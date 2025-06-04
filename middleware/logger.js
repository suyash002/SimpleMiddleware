// middleware/logger.js
module.exports = (req, res, next) => {
    const start = Date.now();
    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toISOString();
  
    res.on("finish", () => {
      const duration = Date.now() - start;
      console.log(`[${timestamp}] ${method} ${url} - ${res.statusCode} - ${duration}ms`);
    });
  
    next();
  };
  