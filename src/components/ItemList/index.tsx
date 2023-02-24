import { Text, View, Image, TouchableOpacity } from "react-native";
import { ItemProps } from "../../screens/Home";

import { Checkbox } from "../Checkbox";

import { styles } from "./styles";

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
  return (
    <View style={styles.container}>
      <Checkbox
        id={item.id}
        isChecked={item.isChecked}
        handleSetSelected={handleSetSelected}
      />
      <Text style={item.isChecked ? styles.textItemFinished : styles.textItem}>
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
