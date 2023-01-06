import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {blue_color, gray_color} from '../../utils/constant';
import React from 'react';
import {
  HomeIcon,
  HomeIconActive,
  OrderIcon,
  OrderIconActive,
  UserIcon,
  UserIconActive,
} from '../../assets';

const TabItem = ({onPress, onLongPress, isFocused, label}) => {
  const Icon = () => {
    if (label === 'Home') {
      return isFocused ? <HomeIconActive /> : <HomeIcon />;
    }

    if (label === 'Pesanan') {
      return isFocused ? <OrderIconActive /> : <OrderIcon />;
    }

    if (label === 'Akun') {
      return isFocused ? <UserIconActive /> : <UserIcon />;
    }

    return <HomeIconActive />;
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 13,
    color: isFocused ? blue_color : gray_color,
    marginTop: 8,
  }),
});
