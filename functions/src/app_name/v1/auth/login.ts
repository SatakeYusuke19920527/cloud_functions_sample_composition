import { regionFunctions } from '../../../helper';

/**
 * ログイン処理
 */
export const login = regionFunctions.https.onCall(async (data, context) => {
  try {
    // ログインの処理を記載してください。
  } catch (error) {
    // errorの処理を記載してください。
    console.log('🚀 ~ file: login.ts:24 ~ error:', error);
  }
});
