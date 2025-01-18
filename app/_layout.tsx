import { Stack } from "expo-router"
import SearchBar from "@/app-example/components/searchBar"
import { Provider } from "react-redux"
import { store } from "@/redux"


export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="(home)" options={{headerShown : false}} />
      </Stack>
    </Provider>
    

  )
}
