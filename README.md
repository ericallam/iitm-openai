## import-in-the-middle + OpenAI shims repro

### Steps

1. Use Node 20+
2. `npm install`
3. Run without iitm using `npm run start`, observe OpenAI make the request (even though it fails because of auth)
4. Run with iitm using `npm run start:iitm`, observe TypeError: getDefaultAgent is not a function;
