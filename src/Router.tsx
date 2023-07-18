import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Member, { MemberRootStackParamList } from "./pages/Member/Member";
import Profile, { ProfileRootStackParamList } from "./pages/Profile/Profile";
import MemberDetail from "./pages/Member/MemberDetail";
import MemberUpdate from "./pages/Member/MemberUpdate";
import ProfileEdit from "./pages/Profile/ProfileEdit";

const Tab = createBottomTabNavigator();
const MemberRootStack = createNativeStackNavigator<MemberRootStackParamList>();
const ProfileRootStack = createNativeStackNavigator<ProfileRootStackParamList>();

const MemberStack = () => {
    return (
        <MemberRootStack.Navigator screenOptions={{ headerShown: false }} >
            <MemberRootStack.Screen name="Member" component={Member} />
            <MemberRootStack.Screen name="MemberDetail" component={MemberDetail} />
            <MemberRootStack.Screen name="MemberUpdate" component={MemberUpdate} />
        </MemberRootStack.Navigator>
    );
}

const ProfileStack = () => {
    return (
        <ProfileRootStack.Navigator screenOptions={{ headerShown: false }} >
            <ProfileRootStack.Screen name="Profile" component={Profile} />
            <ProfileRootStack.Screen name="ProfileEdit" component={ProfileEdit} />
        </ProfileRootStack.Navigator>
    );
}

function Router() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="MemberScreen" screenOptions={{ headerShown: false }}>
                <Tab.Screen name="ProfileScreen" component={ProfileStack}
                    options={{
                        title: "Profile",
                        tabBarActiveTintColor: "tomato",
                        tabBarInactiveTintColor: "gray"
                    }}
                />
                <Tab.Screen name="MemberScreen" component={MemberStack} options={{
                    title: "Member",
                    tabBarActiveTintColor: "tomato",
                    tabBarInactiveTintColor: "gray",
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Router;