/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION
var apiSafespotdataGraphQLAPIIdOutput = process.env.API_SAFESPOTDATA_GRAPHQLAPIIDOUTPUT
var apiSafespotdataGraphQLAPIEndpointOutput = process.env.API_SAFESPOTDATA_GRAPHQLAPIENDPOINTOUTPUT
var storageStorageBucketName = process.env.STORAGE_STORAGE_BUCKETNAME

Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
