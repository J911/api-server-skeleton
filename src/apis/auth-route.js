const express = require('express');
const authController = require('../controller/auth-controller');

const router  = new express.Router();
router.post('/sign-in', signIn);
router.post('/sign-up');

async function signIn (req, res) {
  const id = req.body.id;
  const pw = req.body.pw;
  if (id === undefined || pw === undefined) return res.sendStatus(400);
  
  const result = await authController.signIn(id, pw);
  if (result.status !== 200) return res.sendStatus(result.status);
  
  // ..login 성공시 로직
  
  return res.status(200).json({ token: "1234" });
}

module.exports = router;