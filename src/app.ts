import Express from 'express';
import cors from 'cors';
import requestsRoute from './routes/requests.route';
import apiRoute from './routes/api.route';

const app = Express();

app.use(cors());

app.use(Express.json())

app.use("/api/v1", apiRoute);

app.use("/api/v1/resident/request", requestsRoute)

app.get('/', (req, res) => {
  res.send('v52-tier2-team-20 server is running');
});

export default app