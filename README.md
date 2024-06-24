## import-in-the-middle + OpenAI shims repro

### Steps

1. Use Node 20+
2. `npm install`
3. Run without iitm using `npm run start`, observe OpenAI make the request (even though it fails because of auth)
4. Run with iitm using `npm run start:iitm`, observe TypeError: getDefaultAgent is not a function:

```
TypeError: getDefaultAgent is not a function
at OpenAI.buildRequest (./iitm-openai/node_modules/openai/core.mjs:208:66)
at OpenAI.makeRequest (./iitm-openai/node_modules/openai/core.mjs:279:44)
at async doWork (./iitm-openai/src/index.mjs:8:20)
```
