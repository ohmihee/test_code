import express from "express";
import AWS from "aws-sdk";
import env from "dotenv";
env.config();

const app = express();
// AWS.config.update({
//   region: process.env.REGION,
//   accessKeyId: process.env.ACCESSKEYID,
//   secretAccessKey: process.env.SECRETACCESSKEY,
// });

const aws = new AWS.SNS({
  region: process.env.REGION,
  accessKeyId: process.env.ACCESSKEYID,
  secretAccessKey: process.env.SECRETACCESSKEY,
  apiVersion: "2010-03-31",
});
// https://docs.aws.amazon.com/ko_kr/sdk-for-javascript/v2/developer-guide/sns-examples-managing-topics.html

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 주제 생성
 * ----------------------------------------------------------------------------------------------------------------------
 */
aws.createTopic({ Name: "mytopic_sdk_v" }).promise();
// const createTopicPromise = new AWS.SNS({ apiVersion: "2010-03-31" })
//   .createTopic({ Name: "TOPIC_NAME" })
//   .promise();

// AWS.config.getCredentials(function (err) {
//   if (err) console.log(err.stack);
//   else {
//     console.log("Access key:", AWS.config.credentials.accessKeyId);
//   }
// });

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 주제 목록
 * ----------------------------------------------------------------------------------------------------------------------
 */
// const listTopicsPromise = new AWS.SNS({ apiVersion: '2010-03-31' })
//   .listTopics({})
//   .promise();

// listTopicsPromise
//   .then(function (data) {
//     console.log(data.Topics);
//   })
//   .catch(function (err) {
//     console.error(err, err.stack);
//   });

// const listTopicsPromise = aws.listTopics({}).promise();

// listTopicsPromise
//   .then(function (data) {
//     console.log(data.Topics);
//   })
//   .catch(function (err) {
//     console.error(err, err.stack);
//   });

/**
 * ----------------------------------------------------------------------------------------------------------------------
 * 주제 삭제
 * ----------------------------------------------------------------------------------------------------------------------
 */
// const deleteTopicPromise = aws
//   .deleteTopic({
//     TopicArn: "",
//   })
//   .promise();

// deleteTopicPromise
//   .then(function (data) {
//     console.log("Topic Deleted");
//   })
//   .catch(function (err) {
//     console.error(err, err.stack);
//   });

/**
 * -------------------------------------------------------------------------------------------------------------------------
 * 토픽속성가져오기
 * -------------------------------------------------------------------------------------------------------------------------
 */
//

/**
 * -------------------------------------------------------------------------------------------------------------------------
 * 주제에 메시지 게시
 * -------------------------------------------------------------------------------------------------------------------------
 */
// let params = {
//   Message: '안녕하세요' /* required */,
//   TopicArn: '',
// };

// const publishTextPromise = aws
//   .publish(params)
//   .promise();

// // Handle promise's fulfilled/rejected states
// publishTextPromise
//   .then(function (data) {
//     console.log(
//       `Message ${params.Message} sent to the topic ${params.TopicArn}`
//     );
//     console.log(data);
//     console.log('MessageID is ' + data.MessageId);
//   })
//   .catch(function (err) {
//     console.error(err, err.stack);
//   });

/**
 * -------------------------------------------------------------------------------------------------------------------------
 * 주제 구독 목록
 * -------------------------------------------------------------------------------------------------------------------------
 */

// const subslistPromise = aws
//   .listSubscriptionsByTopic({
//     TopicArn: "",
//   })
//   .promise();

// subslistPromise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.error(err, err.stack);
//   });

// app.listen(3000, () => {
//   console.log('server start 3000');
// });

/**
 * -------------------------------------------------------------------------------------------------------------------------
 * 구독 신청
 * -------------------------------------------------------------------------------------------------------------------------
 */

// const params = {
//   Protocol: 'email', //sms  /* required */,
//   TopicArn: '' /* required */,
//   Endpoint: '', //'+82010',
// };

// const params = {
//   Protocol: 'sms', //sms  /* required */,
//   TopicArn: '' /* required */,
//   Endpoint: '+82010', //'+82010',
// };

// var subscribePromise = aws
//   .subscribe(params)
//   .promise();

// // Handle promise's fulfilled/rejected states
// subscribePromise
//   .then(function (data) {
//     console.log('Subscription ARN is ' + data.SubscriptionArn);
//   })
//   .catch(function (err) {
//     console.error(err, err.stack);
//   });

/**
 * -------------------------------------------------------------------------------------------------------------------------
 * 구독 취소
 * -------------------------------------------------------------------------------------------------------------------------
 */
// const unSubscribePromise = aws
//   .unsubscribe({
//     SubscriptionArn: "...",
//   })
//   .promise();

// unSubscribePromise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.error(err, err.stack);
//   });

/**
 * -------------------------------------------------------------------------------------------------------------------------
 * sms 메시지 전송  // 아직 안 됨
 * -------------------------------------------------------------------------------------------------------------------------
 */
// const params = {
//   Message: '지언님 안녕하세요' /* required */,
//   PhoneNumber: '+8201012345678',
// };

// // Create promise and SNS service object
// const publishTextPromise = aws
//   .publish(params)
//   .promise();

// // Handle promise's fulfilled/rejected states
// publishTextPromise
//   .then(function (data) {
//     console.log('MessageID is ' + data.MessageId);
//   })
//   .catch(function (err) {
//     console.error(err, err.stack);
//   });

/**
 * -------------------------------------------------------------------------------------------------------------------------
 * sms 속성 설정
 * -------------------------------------------------------------------------------------------------------------------------
 */
// const params = {
//   attributes: {
//     /* required */
//     DefaultSMSType: 'Promotional' /* highest reliability */,
//     //'DefaultSMSType': 'Promotional' /* lowest cost */
//   },
// };

// var setSMSTypePromise = aws
//   .setSMSAttributes(params)
//   .promise();

// setSMSTypePromise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.error(err, err.stack);
//   });

/**
 * -------------------------------------------------------------------------------------------------------------------------
 * sms 옵트아웃 확인
 * -------------------------------------------------------------------------------------------------------------------------
 */
const phonenumPromise = aws
  .checkIfPhoneNumberIsOptedOut({ phoneNumber: "+8201091234567" })
  .promise();

phonenumPromise
  .then(function (data) {
    console.log(data);
    console.log("Phone Opt Out is " + data.isOptedOut);
  })
  .catch(function (err) {
    console.error(err, err.stack);
  });

/**
 * -------------------------------------------------------------------------------------------------------------------------
 * sms 옵트아웃한 번호 목록  확인
 * -------------------------------------------------------------------------------------------------------------------------
 */
// const phonelistPromise = aws.listPhoneNumbersOptedOut({}).promise();

// // Handle promise's fulfilled/rejected states
// phonelistPromise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.error(err, err.stack);
//   });

/**
 * -------------------------------------------------------------------------------------------------------------------------
 * 인증 otp 보내기
 * -------------------------------------------------------------------------------------------------------------------------
 */
// const params = {
//   PhoneNumber: "+8201012345678" /* required */,
//   LanguageCode: "kr-KR",
// };
// const phonenumberPromise = aws.createSMSSandboxPhoneNumber(params).promise();

// phonenumberPromise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch(function (err) {
//     console.error(err, err.stack);
//   });

//   de_DE |
//   en_GB |
//   en_US |
//   es_419 |
//   es_ES |
//   fr_CA |
//   fr_FR |
//   it_IT |
//   jp_JP |
//   kr_KR |
//   pt_BR |
//   zh_CN |
//   zh_TW |

/**
 * -------------------------------------------------------------------------------------------------------------------------
 * 인증 otp 보내기 - otp 확인
 * -------------------------------------------------------------------------------------------------------------------------
 */
const params = {
  OneTimePassword: "..." /* required */,
  PhoneNumber: "+8201012345678" /* required */,
};
const phonenumberPromise = aws.verifySMSSandboxPhoneNumber(params).promise();

phonenumberPromise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.error(err, err.stack);
  });

// export AWS_PROFILE=test
