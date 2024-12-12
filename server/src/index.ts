import { config } from 'dotenv'
config()
import app from './app';
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {    
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
