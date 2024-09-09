const express = require('express');
const cors = require('cors');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');
const globalErrorHandler = require('./src/middlewares/errorHandler');
const routes = require('./src/routes/integration');

const app = express();

app.use(cors());                  
app.use(helmet());                  
app.use(compression());             
app.use(express.json());          

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', routes);

app.get("/test-crm-agent", (req, res, next)=>{
    res.status(200).json({
      status: 'success',
      message: `Hello from CRM Agent.`,
    });
});

app.use(globalErrorHandler);  

module.exports = app;