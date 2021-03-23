import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyCtFYeyihpoAkceA4_8rL_IdmJWo9Vz00o",
  authDomain: "poke-50668.firebaseapp.com",
  databaseURL: "https://poke-50668-default-rtdb.firebaseio.com",
  projectId: "poke-50668",
  storageBucket: "poke-50668.appspot.com",
  messagingSenderId: "944053762918",
  appId: "1:944053762918:web:7fe43f2afb1fe6f14026a7"
};

firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSoket = (cb) => {
    this.database.ref('pokemons').on('value', (snapshot) => {
      cb(snapshot.val())
    })
  }

  offPokemonSoket = () => {
    this.database.ref('pokemons').off()
  }

  getPokemons = async () => {
    return await this.database.ref('pokemons').once('value').then(snapshot=> snapshot.val())
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon)
  }

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child('pokemons').push().key;
    this.database.ref('pokemons/' + newKey).set(data).then(() => cb())
  }
}

export default Firebase;