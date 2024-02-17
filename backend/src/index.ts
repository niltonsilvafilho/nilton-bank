import express, { Request, Response } from 'express';
import { getCategories } from './controllers/Category';
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors())

app.get('/teste', async function(req: Request, res: Response) {
    let response = await getCategories(req, res)
    console.log("🚀 ~ app.get ~ response:", response)
    res.status(200).send(response)
});

app.post('/teste', function(req: Request, res: Response) {
  console.log("🚀 ~ app.post ~ teste:")
  console.log(req.body)
  res.send('')
})

app.listen(3000, () => {
  console.log("Projeto executando na porta 3000");
});