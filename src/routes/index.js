import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../pages/welcome';
import SignIn from '../pages/Signin';
import DoctorHome from '../pages/DoctorHome';
import UserHome from '../pages/UserHome';
import Receituarios from '../pages/Receituarios';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome} 
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="DoctorHome"
                component={DoctorHome}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="UserHome"
                component={UserHome}
                options={{headerShown: false}}
            />

            <Stack.Screen
                name="Receituarios"
                component={Receituarios}
                options={{headerShown: false}}
            />

        </Stack.Navigator>
    );
}