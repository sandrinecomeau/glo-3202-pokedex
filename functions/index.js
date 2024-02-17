const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addPokemon = functions.https.onCall(async (data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
  }

  const species = data.species;
  const nickname = data.nickname;
  const user = context.auth.uid;

  const supportedPokemonRef = admin.firestore().collection('supported_pokemon').doc(species);
  const doc = await supportedPokemonRef.get();

  if (!doc.exists) {
    throw new functions.https.HttpsError('not-found', 'The specified Pokémon species is not supported.');
  }

  const newPokemon = {
    species,
    nickname,
    user,
    dex: doc.data().dex,
    type: doc.data().type,
    img: doc.data().img,
  };

  await admin.firestore().collection('pokemons').add(newPokemon);

  return { message: `Pokemon ${species} successfully added.` };
});
