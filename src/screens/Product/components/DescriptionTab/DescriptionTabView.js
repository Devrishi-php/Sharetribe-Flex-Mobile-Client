import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import s from './styles';
import i18n from '../../../../i18n';
// import { categories } from '../../../../constants';
// import { Text, Touchable} from '../../../../components';
import Location from '../Location/Location';
import Seller from '../Seller/Seller';
import { Touchable, Text } from '../../../../components';

const DescriptionTab = ({ text, setVisible, isVisible, onPress }) => (
  <View style={s.container}>
    <View style={s.description}>
      <View
        style={[s.textContainer, isVisible ? s.flex : s.maxHeight]}
      >
        <Text numberOfLines={!isVisible && 5} style={s.text}>
          {text}
        </Text>
      </View>
      <Touchable style={s.buttonContainer} onPress={onPress}>
        {isVisible ? (
          <Text orange>Less</Text>
        ) : (
          <Text orange>More</Text>
        )}
      </Touchable>
      <Location />
      <Seller
        // image={image}
        name="Ben"
        rating={4}
      />
    </View>
  </View>
);

export default DescriptionTab;