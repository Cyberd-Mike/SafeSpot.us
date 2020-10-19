/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiSafespotdataGraphQLAPIIdOutput = process.env.API_SAFESPOTDATA_GRAPHQLAPIIDOUTPUT
var apiSafespotdataGraphQLAPIEndpointOutput = process.env.API_SAFESPOTDATA_GRAPHQLAPIENDPOINTOUTPUT
var storageStorageBucketName = process.env.STORAGE_STORAGE_BUCKETNAME

Amplify Params - DO NOT EDIT */
const qrCode = require('qrcode');
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

exports.handler = async (event, context) => {
    var response;
    console.log('Event is ', event);
    const data = event.customURL;
    console.log('Data is ', data);
    const urlData = `http://safespot.us/s/${data}`;
    
    const qrImage = await qrCode.toDataURL(urlData);
    
    console.log('QrImage is', qrImage);

    if(qrImage.length > 0){
        const base64Data = new Buffer.from(qrImage.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        // const type = qrImage.split(';')[0].split('/')[1];
        const imageName = data + 'QRCode-' + Date.now()+".png";

        const params = {
            Bucket: 'safespot-qrstorage',
            Key: `${imageName}`,
            Body: base64Data
        }
        console.log('Params are', params)
        
        if (params.length > 0){
            s3.upload(params, function (err, data) {
                if (err){
                    console.log("Error", err)
                    response = {
                        "statusCode": 400,
                        "headers": {
                            "Access-Control-Allow-Origin": "*"
                        },
                        "body": JSON.stringify(err),
                        "isBase64Encoded": false
                    }
                    console.log('Error Response is', response);
                } else {
                    console.log("QR Code upload complete!", data);
                    response = {
                        "statusCode": 200,
                        "headers": {
                            "Access-Control-Allow-Origin": "*"
                        },
                        "body": JSON.stringify(data),
                        "isBase64Encoded": false
                    }
                    console.log('Succsess response is', response);
                }
                return response;
            });
        }
    }
};
