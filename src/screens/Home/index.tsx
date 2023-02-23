import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.image}
      />

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button}>
          <Image source={require("../../assets/images/icon-plus.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerList}>
        <FlatList
          data={[]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <Text>Item list</Text>}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => <Text>Empty list</Text>}
        />
      </View>
    </View>
  );
}
