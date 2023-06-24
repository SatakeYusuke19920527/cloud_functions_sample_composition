import * as admin from 'firebase-admin';
import * as app_name from './app_name';

// initialize
admin.initializeApp();
export const db = admin.firestore();

export { app_name };
