import { regionFunctions } from '../../../helper';

/**
 * ユーザ登録処理
 */
export const register = regionFunctions.https.onCall(async (data, context) => {
  try {
    // ユーザ登録の処理を記載してください。
  } catch (error) {
    // errorの処理を記載してください。
    console.log('🚀 ~ file: register.ts:10 ~ register ~ error:', error);
  }
});
