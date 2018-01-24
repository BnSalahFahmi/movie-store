// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAk6_X6JUdJyoQ85Y4IVL6dpHodLrCY0DY",
    authDomain: "book-app-store.firebaseapp.com",
    databaseURL: "https://book-app-store.firebaseio.com",
    projectId: "book-app-store",
    storageBucket: "",
    messagingSenderId: "954685238652"
  }
};
