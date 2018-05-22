// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyBMVo000g8--ASX3qASs_l9e5kqEOlNj8o",
    authDomain: "todolistapp-d7c33.firebaseapp.com",
    databaseURL: "https://todolistapp-d7c33.firebaseio.com",
    projectId: "todolistapp-d7c33",
    storageBucket: "todolistapp-d7c33.appspot.com",
    messagingSenderId: "839865732780"
  }

};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
