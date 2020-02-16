// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBtbIjBSEeHZ07v7IMcjmlMlatVASoxQXc',
    authDomain: 'movies-store-54267.firebaseapp.com',
    databaseURL: 'https://movies-store-54267.firebaseio.com/',
    projectId: 'movies-store',
    storageBucket: '',
    messagingSenderId: '954685238652'
  }
};
