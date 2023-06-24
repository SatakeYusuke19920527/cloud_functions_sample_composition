import * as auth from './v1/auth';
import * as data from './v1/data';
import * as mail from './v1/mail';

export const v1 = {
  auth: { ...auth },
  mail: { ...mail },
  data: { ...data },
};
