
import { StyleSheet, View, Switch } from 'react-native';

export default function Switch({ screenstyle, value, onValueChange }) {
  return (
    <View style={screenstyle}>
      <Switch
        value={value}
        onValueChange={onValueChange}
      />
    </View>
  );
}

