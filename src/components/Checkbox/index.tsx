import { View, Pressable } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { styles } from "./styles";

interface CheckboxProps {
  id: number;
  isChecked: boolean;
  handleSetSelected: (id: number) => void;
}

export function Checkbox({ id, isChecked, handleSetSelected }: CheckboxProps) {
  return (
    <View
      style={[
        styles.container,
        isChecked ? styles.isChecked : styles.isNotChecked,
      ]}
    >
      <Pressable onPress={() => handleSetSelected(id)} style={styles.icon}>
        {isChecked && (
          <MaterialCommunityIcons name="check" size={18} color="#fff" />
        )}
      </Pressable>
    </View>
  );
}
