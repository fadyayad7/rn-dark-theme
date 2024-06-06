import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'nativewind';
import { Text, View, Switch } from 'react-native';

export default function App() {
  const {colorScheme, toggleColorScheme} = useColorScheme();
  return (
    <View className="flex-1 items-center justify-center bg-[#EEEEEE] dark:bg-[#222831] space-y-6">
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <View className='flex-row justify-center items-center space-x-2'>
        <Text className="text-xl dark:text-gray-100">Toggle Theme</Text>
        <Switch value={colorScheme === 'dark'} onChange={toggleColorScheme} />
      </View>
      
      <Text className='dark:text-gray-100 mx-4 text-justify'>
        Dark mode, a display setting where light-colored text is presented on a dark background, offers several important benefits. It reduces eye strain, particularly in low-light environments, by minimizing the contrast between the screen and the surrounding area. This can lead to improved comfort during prolonged screen use. Additionally, dark mode can save battery life on devices with OLED or AMOLED screens, as these technologies use less power to display darker pixels. Moreover, many users find dark mode aesthetically pleasing and easier on the eyes, contributing to a more enjoyable and sustainable digital experience.
      </Text>
    </View>
  );
}
