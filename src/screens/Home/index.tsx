import {
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import uuid from "react-native-uuid";

import { ItemList } from "../../components/ItemList";

import { styles } from "./styles";
import { useCallback, useState } from "react";
import { EmptyList } from "../../components/EmptyList";

export interface ItemProps {
  id: number;
  text: string;
  isChecked: boolean;
}

export function Home() {
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState<ItemProps[]>([]);
  const [totalItemsFinished, setTotalItemsFinished] = useState(0);

  console.log("items", items, "item", itemName);

  const handleSetSelected = useCallback(
    (id: number) => {
      console.log("clicou no id", id);
    },
    [items, itemName]
  );

  const confirmRemoveItem = useCallback(
    (id: number) => {
      setItems(items.filter((item) => item.id !== id));
    },
    [items, itemName]
  );

  const handleRemoveItem = useCallback(
    (id: number) => {
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
    },
    [items, itemName]
  );

  const handleAddNewItem = useCallback(() => {
    const itemExists = items.find((item) => item.text == itemName);
    console.log("itemExists", itemExists);

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
  }, [items, itemName]);

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
