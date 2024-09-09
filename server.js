const app = require('./app');
const connectMongoDB = require('./src/databases/mongo');

// connectMongoDB();

const port = process.env.PORT || 7878;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
