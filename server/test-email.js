// Test isolé : aucune donnée du formulaire et aucun code réel ne sont lus.
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const nodemailer = require('nodemailer');

async function main() {
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASS?.trim();
  const to = process.env.EMAIL_TO?.trim() || user;
  if (!user || !pass) {
    throw new Error('Configuration Gmail absente dans server/.env.');
  }
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
    connectionTimeout: 15000,
    greetingTimeout: 15000,
    socketTimeout: 20000,
  });
  try {
    const result = await transport.sendMail({
      from: user,
      to,
      subject: '[TEST INTERNE] Vérification de réception',
      text: [
        'Message de test uniquement — données fictives.',
        'Nom : Utilisateur de démonstration',
        'Email : demo@example.invalid',
        'Montant fictif : 0 EUR',
        'Code fictif 1 : TEST-NON-UTILISABLE-001',
        'Code fictif 2 : TEST-NON-UTILISABLE-002',
        'Ces codes ne correspondent à aucune carte ni recharge.',
      ].join('\n'),
    });
    if (!result.accepted?.length || result.rejected?.length) {
      throw new Error('Le serveur de messagerie a refusé le destinataire.');
    }
    console.log('Message de test accepté par Gmail. Vérifiez la boîte de réception et les spams.');
  } finally {
    transport.close();
  }
}

main().catch((error) => {
  // Ne pas afficher les identifiants ou les réponses SMTP contenant des adresses.
  console.error('Test échoué :', error.code || 'configuration ou destinataire à vérifier');
  process.exitCode = 1;
});
