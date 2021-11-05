## What is React Native
A framework for building native apps using JavaScript

You don't need to know ios and android programming
<img src="https://cdn-images-1.medium.com/max/800/1*cHF5NIiZAXlyVoQzKuCwtA.png" />
<img src="https://cdn-images-1.medium.com/max/800/1*eNcRCV48JdhZFOMihtS-nQ.png" />
What and Why do we use Expo?

- Expo is a framework and a platform for universal React applications. It is a set of tools and services built around React Native and native platforms that help you develop, build, deploy, and quickly iterate on iOS, Android, and web apps from the same JavaScript/TypeScript codebase.

- Expo는 범용성있는 React 앱을 만들기 위해 사용하는 플랫폼이자 프레임워크다. 이는 React Native 및 기본 플랫폼을 기반으로 구축된 툴 및 서비스의 집합으로, 동일한 JavaScript/Typescript 코드베이스에서 IOS와 Android 및 웹 앱 개발, 구축, 배포를 신속하게 할 수 있도록 지원한다.

## Setting Up the Development Environment
node -v
npm
npm install -g expo-cli
Expo Client - Android or IOS 앱 다운

Visual Studio Code Extensions
React Native Tools
React-Native/React/Redux

expo init DoneWithIt --template=blank
cd DoneWithIt
code .
npm start or expo start
https://docs.expo.dev/versions/latest/
https://docs.expo.dev/workflow/android-studio-emulator/

## Running on a Device
- QR 코드를 이용하는 경우 반드시 같은 와이파이를 사용하고 있어야한다.

## Logging
- `console.log()`를 사용하면 cmd 창에서 로그를 확인할 수 있다.

## Debugging in Chrome

## Publishing

## Fixing the Auto Import Issue
아래와 같이 작성하면 속도가 빨라진다.
```json
{
    "exclude": [
        "node_modules"
    ]
}
```

## Fundamental Concepts
#### Core Components & APIs
- https://reactnative.dev/docs/activityindicator (Cross-Platform)
- View
- Text
- Image
- Button
- Touchables
- Alert

## View
## Touchables
```javascript
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";

// SafeAreaView를 사용하면 내용이 SafeAreaView에 위치한다.
// numberOfLines ==> Truncate된다. 한 줄 보다 더 Text 길면...
// <Image source={require("./assets/icon.png")} />
// Check Out Official Docs
// Image는 Touch가 안되는데 되도록 만들고 싶은 경우 TouhableWihoutFeeback
// TouchableOpacity - Touch시 깜빡 거림 발생
// TouchableNativeFeedback - only in android

export default function App() {
  console.log("App Executed");
  console.log(require("./assets/icon.png"));

  const handlePress = () => console.log("Text Pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>
        Hello World - A really really long text, Let's see what
        happensssssssssssss
      </Text>
      <TouchableWithoutFeedback onPress={() => console.log("Image Touched!")}>
        <Image
          blurRadius={10}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableWithoutFeedback>
      <TouchableOpacity>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableOpacity>
      <TouchableHighlight>
        <Image
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
      </TouchableHighlight>
      <TouchableNativeFeedback>
        <View
          style={{ width: 200, height: 70, backgroundColor: "dodgerblue" }}
        ></View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

## Button
```javascript
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";

export default function App() {
  console.log("App Executed");
  console.log(require("./assets/icon.png"));

  const handlePress = () => console.log("Text Pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click Me!"
        onPress={() => console.log("Button Tapped!")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

## Alert
- `prompt`는 ios에서만 동작한다
```javascript
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  console.log("App Executed");
  console.log(require("./assets/icon.png"));

  const handlePress = () => console.log("Text Pressed");

  return (
    <SafeAreaView style={styles.container}>
      <Button
        color="orange"
        title="Click Me!"
        onPress={() => alert("Button Tapped!")}
      />
      <Button
        color="blue"
        title="Click Me Two!"
        onPress={() =>
          Alert.alert("My title", "My Message", [
            { text: "Yes", onPress: () => console.log("Yes") },
            { text: "No", onPress: () => console.log("No") },
          ])
        }
      />
      <Button
        title="Click Me Three!"
        onPress={() => {
          Alert.prompt("My title", "My message", (text) => console.log(text));
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

```

## Stylesheet

## Platform-Specific Code