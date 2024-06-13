import io from 'socket.io-client';
import { SOCKET_URL } from '@/configs/env';

const url = SOCKET_URL;
const socketClient = io(url);

export default socketClient;
