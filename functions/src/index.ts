import * as functions from 'firebase-functions';
import fetch from 'node-fetch';
import { format } from 'date-fns'
import { convertToTimeZone } from 'date-fns-timezone';

const END_POINT = "https://holidays-jp.github.io/api/v1/date.json";
const timeZone = "Asia/Tokyo";
const zonedTargetDate = convertToTimeZone(new Date(), { timeZone });
const today = format(zonedTargetDate, 'yyyy-MM-dd');

export const isJPHolidayFunction = functions.region("asia-northeast1").https.onRequest(async (request, response) => {
  try {
    const res = await fetch(END_POINT);
    const data = await res.json();
    const isHoliday = data[today] !== undefined;
    response.send(isHoliday);
  } catch (error) {
    response.status(400).send({ error: 'Something blew up!' })
  }
});
