import { Button, SafeAreaView, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


export type MemberRootStackParamList = {
    Member: undefined;
    MemberDetail: undefined;
    MemberUpdate: undefined;
    Profile: undefined
}

type MemberProps = NativeStackScreenProps<MemberRootStackParamList, 'Member'>;

function Member({ navigation }: MemberProps) {
    return (
        <SafeAreaView>
            <Text>Hello Member</Text>
            <Button title="Detail" onPress={() => navigation.navigate("MemberDetail")} />
        </SafeAreaView>
    );
}

export default Member;