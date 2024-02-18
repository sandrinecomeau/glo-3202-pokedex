const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.addPokemon = functions.https.onCall(async (data, context) => {
  try {

    if (!context.auth) {
      throw new functions.https.HttpsError('unauthenticated', 'The function must be called while authenticated.');
    }

    if (data.nickname.length > 100 || !data.nickname.match(/^[a-zA-Z0-9\s]*$/)) {
      throw new functions.https.HttpsError('invalid-argument', 'Nickname must be 100 characters or less and only contain letters, numbers and spaces.');
    }

    let species = data.species;
    species = species.toLowerCase().replace(/\s/g, '');
    species = species.charAt(0).toUpperCase() + species.slice(1);
    const nickname = data.nickname;
    const user = context.auth.uid;

    const supportedPokemonRef = admin.firestore().collection('supported_pokemons').doc(species);
    const doc = await supportedPokemonRef.get();

    if (!doc.exists) {
      throw new functions.https.HttpsError('not-found', species + ': The specified Pokémon species is not supported.');
    } else {
      const newPokemon = {
          species,
         nickname,
         user,
         dex: doc.data().dex,
         type: doc.data().type,
         img: doc.data().id,
       };

      //await db.collection('pokemon').add(newPokemon) then return the id
      await admin.firestore().collection('pokemon').add(newPokemon);
      return {message: `Pokemon ${species} successfully added.`};
    }
  } catch (error) {
      throw new functions.https.HttpsError('internal', error.message);
  }
});
