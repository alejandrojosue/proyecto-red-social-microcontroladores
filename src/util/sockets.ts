import type {unknown} from 'astro/zod';

const io = require('socket.io')();
io.on('connection', (client: unknown) => {console.log(client)});
io.listen(3000);