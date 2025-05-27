var AWS = require('aws-sdk');
var ses = new AWS.SES({region: us-east-1});

var RECEIVER = 'ericrojasf@hotmail.com';
var SENDER = 'ericrojasf@hotmail.com';

var response = {
 "statusCode": 200,
 "headers": { 
"Content-Type": "application/json","Access-Control-Allow-Origin": "*"
},
"isBase64Encoded": false,
 "body": "{ \"result\": \"Success\"\n}"
}

exports.handler = async function (event, context) {
    console.log('Received event:', event);
    sendEmail(event, function (err, data) {
        context.done(err, null);
    });
return response;
};

function sendEmail (event, done) {
    var params = {
        Destination: {
            ToAddresses: [
                RECEIVER
            ]
        },
        Message: {
            Body: {
                Text: {
                    Data: 'Empresa: ' + event.empresa + '\nNombre: ' + event.nombre + ' ' + event.apellido + '\nemail: ' + event.email + '\nTelefono: ' + event.telefono + '\nDireccion: ' + event.direccion + '\nCiudad: ' + event.ciudad + ', ' + event.departamento + ', ' + event.pais + '\nMensaje: ' + event.mensaje,
                    Charset: 'UTF-8'
                }
            },
            Subject: {
                Data: 'Website Referral Form: ' + event.nombre,
                Charset: 'UTF-8'
            }
        },
        Source: SENDER
    };
    ses.sendEmail(params).promise();
}