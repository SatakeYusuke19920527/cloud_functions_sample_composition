import { regionFunctions } from '../../../helper';

/**
 * メールを送信する処理
 */
export const sendMail = regionFunctions.https.onCall(async (data, context) => {
  try {
    // メール送信処理を記載してください。
  } catch (error) {
    // errorの処理を記載してください。
    console.log('🚀 ~ file: getData.ts:10 ~ getData ~ error:', error);
  }
});
