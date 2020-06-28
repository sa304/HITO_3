const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)
const express = require('express');
const cors = require('cors')
const router = express();
router.use(cors({ origin: true }))

router.get("/posters", async (req, res) => {
  const posters = await admin
    .firestore()
    .collection("posters")
    .get();
  var lista = [];
  posters.docs.forEach(doc => {
    lista.push({ id: doc.id, data: doc.data() });
  });
  res.send(lista);
});
router.post("/poster", async (req, res) => {
  const poster = await admin
    .firestore()
    .collection("posters")
    .add(req.body)
    .then(docRef => {
      return docRef.id
    });
  res.send(poster);
});
router.delete("/poster/:id", async (req, res) => {
  const poster = await admin
    .firestore()
    .collection("posters")
    .doc(req.params.id)
    .delete();
  res.send(poster);
});
exports.posters = functions.https.onRequest(router);
