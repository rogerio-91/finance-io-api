import express from 'express' ;
import dotenv from 'dotenv';
import cors from 'cors';
import bearerToken from 'express-bearer-token';
dotenv.config();
import userRoute from './modules/user/user.route.js';
import authRoute from './modules/auth/auth.route.js';
import categoriaRoute from './modules/categorias/categoria.route.js';
import metaRoute from './modules/metas/meta.route.js';
import transacaoRoute from './modules/transacoes/transacao.route.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(bearerToken());

const port = process.env.PORT || 8080;

app.use('/users', userRoute);
app.use('/auth', authRoute);
app.use('/categorias', categoriaRoute);
app.use('/metas', metaRoute);
app.use('/transacoes', transacaoRoute);



app.get('/health', (_, res) => {
    return res.send('Sistema está Operacional')
});

app.listen(8080, ()=> {
    console.log('Servidor rodando na porta 8080')
});