import {
  VStack,
  HStack,
  IconButton,
  Text,
  Heading,
  useTheme,
} from 'native-base';
import { SignOut } from 'phosphor-react-native';

import Logo from '../assets/logo_secondary.svg';

import { Filter } from '../components/Filter';

export function Home() {
  const { colors } = useTheme();

  return (
    <VStack flex={1} pb={6} bg="gray.700">
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={12}
        pb={5}
        px={6}
      >
        <Logo />
        <IconButton icon={<SignOut size={26} color={colors.gray[300]} />} />
      </HStack>
      <VStack flex={1} px={6}>
        <HStack
          w="full"
          mt={8}
          mb={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading color="gray.100">My calls</Heading>
          <Text color="gray.200">1</Text>
        </HStack>
        <HStack space={3} mb={8}>
          <Filter type="open" title="in progress" />
          <Filter type="closed" title="finalized" />
        </HStack>
      </VStack>
    </VStack>
  );
}