import { Link } from "expo-router";
import { Text, View } from "react-native";

type propsCard = {
    title: string,
    body: string,
    href: any
}

export default function Card({title, body, href} : propsCard) {
    return(
        <View style={{ borderWidth: 1, padding: 16, borderRadius: 8, gap: 8}}>
            <Link href={href}>
                <Text style={{ fontSize: 20 }}>{title}</Text>
            </Link>
            <Text>{body}</Text>
        </View>
    )
}