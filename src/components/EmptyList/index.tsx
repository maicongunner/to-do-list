import { Text, View, Image } from "react-native";

import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/empty-list-icon.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subTitle}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
