export const MorningHarwood = {
  apiKey: 'AIzaSyDHNXmnZnAlrffyYn3LR7tvR65vsI_Y7sk',
  authDomain: 'morningharwood-author.firebaseapp.com',
  databaseURL: 'https://morningharwood-author.firebaseio.com',
  projectId: 'morningharwood-author',
  storageBucket: 'morningharwood-author.appspot.com',
  messagingSenderId: '1066837751664'
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
