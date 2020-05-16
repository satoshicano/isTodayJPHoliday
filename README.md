# isTodayJPHoliday

API that returns whether today is a holiday.

This API uses [Holidays JP API](https://holidays-jp.github.io/) internally.

## Usage

```sh
curl https://asia-northeast1-istodayholiday.cloudfunctions.net/isJPHolidayFunction
```

## deploy

- install firebase-tools and setup project
    - [see official docs](https://firebase.google.com/docs/web/setup)
- deploy your function
  - `firebase deploy`

## License

MIT license

