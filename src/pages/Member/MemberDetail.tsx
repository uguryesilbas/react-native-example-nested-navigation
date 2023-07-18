import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, SafeAreaView, Text } from "react-native";

import { MemberRootStackParamList } from "./Member";


type MemberProps = NativeStackScreenProps<MemberRootStackParamList, 'MemberDetail'>;

function MemberDetail({ navigation }: MemberProps) {
    return (
        <SafeAreaView>
            <Text>Hello Member Detail</Text>
            <Button title="Update" onPress={() => navigation.navigate("MemberUpdate")} />
        </SafeAreaView>
    );
}

export default MemberDetail;