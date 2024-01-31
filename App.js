import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Login,
  Signup,
  Welcome,
  Home,
  PassForgot,
  ValidRecoveryCode,
  NewPass,
  Profile,
  Info,
  Portugal,
  France,
  Spain,
  Italy,
  Germany,
  Canada,
  Visa,
  Finances,
  Utilities,
  Asurance,
  Contracts,
  DocComent,
  DocContacts,
  TaxComents,
  DateComents,
  BankComents,
  CardComents,
  AppComents,
  HouseComents,
  TransportComents,
  VantComents,
  HealthComents,
  TripComents,
  LifeComents,
  CrediComents,
  TimeComents,
  EqualComents,
  NewComent,
  CollegesDestiny,
  Comments,
  NewDestiny,
  NewCollege,
} from "./src/screens";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "./src/hooks/auth";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="PassForgot"
              component={PassForgot}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="ValidRecoveryCode"
              component={ValidRecoveryCode}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NewPass"
              component={NewPass}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Info"
              component={Info}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Portugal"
              component={Portugal}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="CollegesDestiny"
              component={CollegesDestiny}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="France"
              component={France}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Spain"
              component={Spain}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Italy"
              component={Italy}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Germany"
              component={Germany}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Canada"
              component={Canada}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Visa"
              component={Visa}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Finances"
              component={Finances}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Utilities"
              component={Utilities}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Asurance"
              component={Asurance}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Contracts"
              component={Contracts}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DocComent"
              component={DocComent}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DocContacts"
              component={DocContacts}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="TaxComents"
              component={TaxComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="DateComents"
              component={DateComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="BankComents"
              component={BankComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="CardComents"
              component={CardComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="AppComents"
              component={AppComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="HouseComents"
              component={HouseComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="TransportComents"
              component={TransportComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="VantComents"
              component={VantComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="HealthComents"
              component={HealthComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="TripComents"
              component={TripComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="LifeComents"
              component={LifeComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="CrediComents"
              component={CrediComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="TimeComents"
              component={TimeComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="EqualComents"
              component={EqualComents}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NewComent"
              component={NewComent}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Comments"
              component={Comments}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NewDestiny"
              component={NewDestiny}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="NewCollege"
              component={NewCollege}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthProvider>
    </SafeAreaProvider>
  );
}
