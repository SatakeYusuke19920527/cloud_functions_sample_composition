import { regionFunctions } from '../../../helper';

/**
 * なんらかのデータを取得する
 */
export const getData = regionFunctions.https.onCall(async (data, context) => {
  try {
    // データ取得処理を記載してください。
  } catch (error) {
    // errorの処理を記載してください。
    console.log('🚀 ~ file: getData.ts:10 ~ getData ~ error:', error);
  }
});
