


import { Redirect } from "expo-router"


// export default function Index() {
//   console.log('TEST123INSIDE')

//   const Stack = createNativeStackNavigator();

//   return (

//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="tta">
//           <Stack.Screen name="tta" component={App} />
//           <Stack.Screen name="details" component={ProductDetail} />
//           <Stack.Screen name="playminigame" component={Minigame} />
//           <Stack.Screen name="MyProduct" component={myProduct} />
//         </Stack.Navigator>
//       </NavigationContainer>



//   );
// }

const Index = () => {
  return (
    <Redirect href="/App" />
  )
}

export default Index