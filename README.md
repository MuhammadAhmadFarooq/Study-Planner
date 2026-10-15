# Assignment 2 — Study Planner

A small Expo / React Native app using plain JavaScript. It uses a **Native Stack Navigator + Bottom Tab Navigator** (two navigator types, as allowed by the assignment). No login, database, API keys, or backend needed.

## Run locally

Use Node.js 22.13+ (or a newer supported LTS release).

```sh
npm install
npm start
```

- **Phone:** Install Expo Go, connect your phone and computer to the same Wi-Fi, and scan the terminal QR code. Use an Expo Go version compatible with the Expo SDK listed in package.json.
- **Browser:** Run `npm run web` (or press `w` in the Expo terminal).
- **Android emulator:** Start an emulator from Android Studio, then run `npm run android` (or press `a`).
- **iOS simulator:** Requires macOS. A physical iPhone can use Expo Go.
- If your phone cannot connect over Wi-Fi, try `npx expo start --tunnel` (requires internet and may offer to install Expo's tunnel helper).
- To clear the bundler cache, run `npx expo start --clear`.

Dependencies are already installed in this working folder. `npm ci` can reproduce the exact package versions from package-lock.json after copying the source to another computer.

## Folder structure

```text
App.js                          Navigation container and status bar
index.js                        Expo entry point
src/
  navigation/AppNavigator.js    Stack and tab navigators, header options
  screens/
    CoursesScreen.js            Course list and navigation with parameters
    CourseDetailsScreen.js      Received course information
    ProfileScreen.js            Student profile tab
    TipsScreen.js               Study tips opened by the header button
  data/courses.js               Local sample course data
  styles/styles.js             Shared colors and styles
```

## How navigation works

```text
NavigationContainer
└── Stack
    ├── Home (header: Study Planner; header button: Study tips)
    │   └── Bottom Tabs
    │       ├── Courses
    │       └── Profile
    ├── CourseDetails (header: selected course code)
    └── Tips (header: Study Tips)
```

The tabs switch between Courses and Profile. Opening details pushes a screen onto the parent stack; going back returns to the tabs. The tab bar is intentionally only visible on Home.

## Assignment requirements / evaluation demo

| Requirement | Implementation | How to demonstrate |
| --- | --- | --- |
| Pass route parameters | CoursesScreen calls `navigation.navigate('CourseDetails', { course })` | Tap any course card. |
| Display received parameters | CourseDetailsScreen reads `route.params.course` | Show its title, code, instructor, room, schedule, and task. Open another course to show different values. |
| Customize headers | AppNavigator sets header colors, screen titles, and the detail title from the selected course code | Compare the Home, Details, and Tips headers. |
| Meaningful header button | Home's `headerRight` opens the Tips screen | Tap **Study tips**, then use the header back button. |
| Combine navigators | A native stack contains a bottom tab navigator | Switch Courses/Profile, then open a course's details. |

`navigation` provides actions such as `navigate()` and `goBack()`. `route` contains the current screen's information, including the parameters passed by the previous screen. The course object contains only strings, so it is serializable. There is no editing or persistent storage in this small demo.

## Personalize / submit

- Update the sample courses in `src/data/courses.js` if desired.
- Update the student text in `src/screens/ProfileScreen.js` with your own details.
- Submit the source, assets, package.json, package-lock.json, app.json, and this README according to the class instructions. Exclude `node_modules`, `.expo`, and generated `dist` files.

Reference: [React Navigation documentation](https://reactnavigation.org/docs/getting-started/).
