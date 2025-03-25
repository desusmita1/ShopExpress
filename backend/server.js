import express from 'express';

const port = 5001; // 5001 port instead of 5000
const app = express();

app.get('/', (req, res) => {
  res.send('Api is running...');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
