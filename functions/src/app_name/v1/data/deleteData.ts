import { regionFunctions } from '../../../helper';

/**
 * なんらかのデータを削除する
 */
export const deleteData = regionFunctions.https.onCall(
  async (data, context) => {
    try {
      // データ削除処理を記載してください。
    } catch (error) {
      // errorの処理を記載してください。
      console.log('🚀 ~ file: getData.ts:10 ~ getData ~ error:', error);
    }
  }
);
