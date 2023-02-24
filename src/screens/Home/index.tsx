import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { useState } from "react";
import uuid from "react-native-uuid";

import { ItemList } from "../../components/ItemList";
import { EmptyList } from "../../components/EmptyList";

import { styles } from "./styles";

export interface ItemProps {
  id: number;
  text: string;
  isChecked: boolean;
}

export function Home() {
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState<ItemProps[]>([]);
  const [totalItemsCompleted, setTotalItemsCompleted] = useState(0);

  function handleSetSelected(id: number) {
    const indexItem = items.findIndex((item) => item.id === id);
    items[indexItem].isChecked = true;
    setItems(items);
    setTotalItemsCompleted(totalItemsCompleted + 1);
  }

  function confirmRemoveItem(id: number) {
    const item = items.find((item) => item.id === id);

    if (item.isChecked) {
      setTotalItemsCompleted(totalItemsCompleted - 1);
    }

    setItems(items.filter((item) => item.id !== id));
  }

  function handleRemoveItem(id: number) {
    Alert.alert("Remover task", "Deseja mesmo remover esta task?", [
      {
        text: "Sim",
        onPress: () => confirmRemoveItem(id),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  function handleAddNewItem() {
    const itemExists = items.find((item) => item.text == itemName);

    if (itemName === "") {
      return;
    }

    if (itemExists) {
      return Alert.alert(
        "Tarefa já registrada",
        "já existe uma tarefa registrada com essa descrição."
      );
    }

    setItems((prevState) => [
      ...prevState,
      {
        id: uuid.v4(),
        text: itemName,
        isChecked: false,
      },
    ]);

    setItemName("");
  }

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
          value={itemName}
          onChangeText={setItemName}
        />

        <TouchableOpacity style={styles.button} onPress={handleAddNewItem}>
          <Image source={require("../../assets/images/plus-icon.png")} />
        </TouchableOpacity>
      </View>
      <View style={styles.containerList}>
        <View style={styles.containerNumbers}>
          <View style={styles.boxNumber}>
            <Text style={styles.containerNumbersTitleCreated}>Criadas</Text>
            <Text style={styles.containerNumbersText}>{items.length}</Text>
          </View>
          <View style={styles.boxNumber}>
            <Text style={styles.containerNumbersTitleCompleted}>
              Concluídas
            </Text>
            <Text style={styles.containerNumbersText}>
              {totalItemsCompleted}
            </Text>
          </View>
        </View>
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }: ItemProps) => (
            <ItemList
              key={item}
              item={item}
              handleSetSelected={handleSetSelected}
              handleRemoveItem={handleRemoveItem}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={<EmptyList />}
        />
      </View>
    </View>
  );
}
