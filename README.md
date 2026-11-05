# Quiz 4 — Firebase SMS OTP Verification

A React Native / Expo application that verifies a phone number with a Firebase SMS one-time password (OTP). The app uses Firebase Authentication through React Native Firebase.

## What the app demonstrates

1. Enter a phone number in international format, for example `+923001234567`.
2. Request an SMS OTP using Firebase Authentication.
3. Enter the received six-digit code.
4. Display a clear success message when verification succeeds, or a helpful failure message for an invalid or expired code.

## Important: this needs a development build

Phone authentication needs native Firebase code. It **does not work in Expo Go or in the web browser**. Use an Android development build on a real phone. The app is configured for Android package name:

`com.muhammadahmadfarooq.firebaseotpquiz`

## Firebase setup (do this once)

1. Open [Firebase Console](https://console.firebase.google.com/) and sign in with your Google account.
2. Select **Create a project**, name it `Firebase OTP Quiz`, and finish the free setup. Google Analytics is optional for this quiz.
3. In the project overview, click the **Android** icon to add an Android app.
4. Enter this exact Android package name: `com.muhammadahmadfarooq.firebaseotpquiz`.
5. Download **google-services.json** and put it at the project root beside `app.json`.
6. Go to **Build → Authentication → Get started → Sign-in method**, open **Phone**, enable it, and save.
7. Go to **Authentication → Settings → SMS region policy** and allow Pakistan (or the country of the number you will use). New Firebase projects block all regions until you set a policy.
8. For a no-cost class demonstration, open **Authentication → Sign-in method → Phone → Phone numbers for testing**. Add a test number in international format and choose a six-digit code. Firebase will accept that code without sending an SMS.

The Firebase config file is ignored by Git. Do not commit it. Never add a Firebase service-account key to this app.

## Install and run on Android

```sh
npm install
npx expo prebuild --clean
npx expo run:android
```

The last command installs a development build on an Android phone or emulator. After the first build, use:

```sh
npx expo start --dev-client
```

Then open the installed **Firebase OTP Quiz** development build and connect it to Metro.

If you edit `app.json`, add Firebase packages, or replace `google-services.json`, run `npx expo prebuild --clean` and `npx expo run:android` again.

## How the implementation works

- `App.js` holds the two-step phone and OTP interface.
- `signInWithPhoneNumber(getAuth(), phoneNumber)` asks Firebase to send the verification SMS and returns a confirmation object.
- `confirmation.confirm(code)` checks the OTP entered by the user.
- `onAuthStateChanged` shows the verified phone number after Firebase signs the user in.
- `app.json` registers both Firebase plugins and points Expo at the Android/iOS Firebase config files.

## Demo flow for evaluation

1. Open the app and show the phone-number field.
2. Enter the Firebase test number, then tap **Send OTP**.
3. Show the OTP field and the “OTP was sent” message.
4. Enter the matching test code and tap **Verify OTP**.
5. Show the green `Phone number verified` success message.
6. Tap **Use a different phone number**, request another OTP, and enter a wrong code to demonstrate failure handling.

## References

- [Firebase Phone Authentication](https://firebase.google.com/docs/auth/web/phone-auth)
- [React Native Firebase Phone Authentication](https://rnfirebase.io/auth/phone-auth)
- [Expo development builds](https://docs.expo.dev/develop/development-builds/introduction/)
