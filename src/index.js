import app from './app';
import env from './configs/index';

app.listen(env.PORT, env.HOST, (err) => {
  if (err) {
    console.error(err);
  }
  console.log(`server is running on ${env.HOST}:${env.PORT}`);
  console.log(`NODE_ENV : ${env.NODE_ENV}`);
})