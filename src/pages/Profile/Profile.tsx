import { SafeAreaView, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ProfileRootStackParamList = {
    Profile: undefined;
    ProfileEdit: undefined;
}

type ProfileProps = NativeStackScreenProps<ProfileRootStackParamList, 'Profile'>;

function Profile({ navigation }: ProfileProps) {
    return (
        <SafeAreaView>
            <Text>Hello Profile</Text>
            <Button title="Edit" onPress={() => navigation.navigate("ProfileEdit")} />
        </SafeAreaView>
    );
}

export default Profile;