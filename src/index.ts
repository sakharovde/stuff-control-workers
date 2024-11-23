import { AutoRouter } from 'itty-router';

const router = AutoRouter();

router.get('/', () => ({ message: 'Hello, from itty-router v5.' }));

router.get('/hi', () => ({ message: 'Hi, from itty-router v5.' }))

export default router;
