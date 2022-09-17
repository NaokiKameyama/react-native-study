import { View, Text } from 'react-native';
import tw from 'tailwind-rn';
import React, { useEffect } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import { Button } from 'react-native-elements';

type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;

export const FlexBoxScreen: React.FC<Props> = ({ navigation }) => {
  useEffect(() => {
    console.log('mounted FlexBox');
    return () => {
      console.log('un-mounted FlexBox');
    };
  }, []);
  return (
    <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
      {/* <View style={tw('w-16 h-16 bg-indigo-500')}></View>
      <View style={tw('w-16 h-16 bg-green-200')}></View>
      <View style={tw('w-16 h-16 bg-red-200')}></View> */}
      <Text>FlexBoxScreen</Text>
      <View style={tw('my-3')}>
        <Button
          title="Go to Hello"
          onPress={() => navigation.navigate('Hello')}
        />
      </View>
    </View>
  );
};
