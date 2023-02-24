var admin = require("firebase-admin");

var serviceAccount = require("./paperlessapp-dbf5a-firebase-adminsdk-adyp8-6b58262710.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const message = {
    notification : {
        title : 'Paperlesss App',
        body : "Cart Updated"
    },
    token : 'chNIX1kFQKuOz-VYB5qGWa:APA91bHgiVYcZaYn_vHBpAY_WMaDIcI7W6W3hO5zFaoVJOKlvVn4m_I5gm_gi_iNtj-xqfewEF01JdnGvIbr61QnRu8TpJT1w8cxTJKZ6azME3WOeYQDrIJPKwW6_gtRsP3cIPHCa8FH'
}

admin.messaging().send(message)
    .then(resp=>{
        console.log('success' , resp)
    })
    .catch(err=> console.log(err))