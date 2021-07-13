import cors from 'cors';
import  express from 'express'
import routes from './routes'

const app  = express();

//permite quais urls podem acessar o back end
app.use(cors());
app.use(routes);

app.listen(3333);