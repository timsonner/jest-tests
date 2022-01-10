# About
01/09/2022  

A Svelte skeleton project with Jest setup, ready to start testing with Typescript support for test files. Jsdom is the default testing environment.  


## Clone the repo, cd into the project directory, then run:

```bash
npm install

npm run dev 
```
## To run a Jest test use:
```bash
npm test
```
The test checks if the index.svelte page contains "Hello SvelteKit" upon render, try changing the string values in index.test.ts to make the test fail.

### Installing Jest (this is just here for my notes)
```bash
npm install --save-dev jest ts-jest @testing-library/svelte @testing-library/jest-dom svelte-jester @types/jest babel-jest @babel/preset-env
```
Also, the config files need to be updated.
