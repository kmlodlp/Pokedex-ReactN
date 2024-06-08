import { Main } from "./src/components/Main";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar />
      <Main />
    </GestureHandlerRootView>
  );
}
