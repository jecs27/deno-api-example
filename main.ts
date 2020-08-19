/**
 * @author jecs27
 * https://github.com/jecs27
 * 
 * @version 0.0.0.1
 * 
 * The code belongs to everyone
 * May the Force be with you
 */

import { App } from './deps.ts';
import { api } from './routes/api.ts';
import { PORT } from './config.ts';

const app = new App();


app.use('/', api);
app.listen({ port: PORT });
 

