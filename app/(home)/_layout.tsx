import { Stack, Tabs } from "expo-router"
import SearchBar from "@/app-example/components/searchBar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


export default () => {

  const queryClient = new QueryClient()


  return (
    
    <QueryClientProvider client={queryClient}>
        <Stack>
  
        <Stack.Screen name="App"  options={{headerShown : false}}/>
        <Stack.Screen name="Minigame" options={{headerShown : false}}/>
        <Stack.Screen name="productDetail" options={{headerShown : false}}/>
        <Stack.Screen name="myProduct" options={{headerShown : false}}/>
      </Stack>
    </QueryClientProvider>
    
  );
}