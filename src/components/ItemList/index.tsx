import { Text, View, Image, TouchableOpacity } from "react-native";
import Checkbox from "expo-checkbox";
import { ItemProps } from "../../screens/Home";

import { styles } from "./styles";
import { useState } from "react";

interface ItemListProps {
  item: ItemProps;
  handleSetSelected: (id: number) => void;
  handleRemoveItem: (id: number) => void;
}

export function ItemList({
  item,
  handleSetSelected,
  handleRemoveItem,
}: ItemListProps) {
  const [isSelected, setIsSelected] = useState(item.isChecked);

  return (
    <View style={styles.container}>
      <Checkbox
        value={item.isChecked}
        onValueChange={() => handleSetSelected(item.id)}
        style={styles.checkbox}
      />
      <Text style={isSelected ? styles.textItemFinished : styles.textItem}>
        {item.text}
      </Text>
      <TouchableOpacity
        style={styles.trash}
        onPress={() => handleRemoveItem(item.id)}
      >
        <Image source={require("../../assets/images/trash-icon.png")} />
      </TouchableOpacity>
    </View>
  );
}
