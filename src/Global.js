class Global{
  constructor() {
    console.log("Cache constructor!")
    this.Date = new Date()
    this.FirebaseClient = null
  }

  setFirebaseClient(firebaseClient)
  {
      sessionStorage.setItem('firebaseClient', JSON.stringify(firebaseClient));
  }
  getFireBaseClient()
  {
      var temp = sessionStorage.getItem('firebaseClient');
      var obj = JSON.parse(temp);
      return obj;
  }
}

// to do : unable to assign to let using function?
// export let global = () => {
//   var g = new Global();
//   console.writeline("declare global")
//   return g;
// }

export let global = new Global()