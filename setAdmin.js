const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Defina o UID do usuário admin aqui:
const uid = 'Ih8VGV7krVfajCwTzAXi7fcFP2t1';

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log(`Usuário ${uid} agora é admin!`);
  })
  .catch((error) => {
    console.error('Erro ao definir admin:', error);
  }); 