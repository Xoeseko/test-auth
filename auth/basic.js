import initializeBasicAuth from 'nextjs-basic-auth';

export const basicAuthCheck = initializeBasicAuth({
  users: [{user: 'test', password: 'test'}]
});
