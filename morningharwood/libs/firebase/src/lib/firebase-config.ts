export const MorningHarwood = {
  apiKey: 'AIzaSyDMNHtmgsu2dv9MPmUA_EOrt7vS00PW12M',
  authDomain: 'mh-client.firebaseapp.com',
  databaseURL: 'https://mh-client.firebaseio.com',
  projectId: 'mh-client',
  storageBucket: 'mh-client.appspot.com',
  messagingSenderId: '985472354315',
};

export class FirebaseConfigs {
  public static find(which) {
    switch (which) {
      case 'MorningHarwood':
        return MorningHarwood;
      default:
        return {};
    }
  }
}
