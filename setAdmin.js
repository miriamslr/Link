const admin = require('firebase-admin');
const readline = require('readline');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite o UID do usuário que será admin: ', function(uid) {
  admin.auth().setCustomUserClaims(uid, { admin: true })
    .then(() => {
      console.log(`Usuário ${uid} agora é admin!`);
      rl.close();
    })
    .catch((error) => {
      console.error('Erro ao definir admin:', error);
      rl.close();
    });
}); 