const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
const express = require('express');
const cors = require('cors')
const router = express();
router.use(cors({ origin: true }))

router.get("/usuario/:id", async (req, res) => {
  const postersFavoritos = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.params.id)
    .get()
    .then(function (doc) {
      if (doc.exists) {
        return doc.data()
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    })
  res.send(postersFavoritos);
});
router.post("/usuario", async (req, res) => {
  const poster = await admin
    .firestore()
    .collection("usuarios")
    .doc(req.body.email)
    .set(req.body.favoritos)
    .then( (d)=> {
      return d
    }).catch(e => {
      return e
    });
  res.send(poster);
});

exports.usuarios = functions.https.onRequest(router);
