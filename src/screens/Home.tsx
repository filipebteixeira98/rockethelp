import { useState } from 'react';
import {
  VStack,
  HStack,
  IconButton,
  Text,
  Heading,
  FlatList,
  Center,
  useTheme,
} from 'native-base';
import { SignOut, ChatTeardropText } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';

import Logo from '../assets/logo_secondary.svg';

import { Filter } from '../components/Filter';
import { Order, OrderProps } from '../components/Order';
import { Button } from '../components/Button';

export function Home() {
  const [statusSelected, setStatusSelected] = useState<'open' | 'closed'>(
    'open'
  );

  const [orders, setOrders] = useState<OrderProps[]>([
    {
      id: 'fab8jgy786hgs',
      patrimony: '97894978',
      when: '03/21/2023 7:00 p.m',
      status: 'open',
    },
  ]);

  const { colors } = useTheme();

  const navigation = useNavigation();

  function handleNewOrder() {
    navigation.navigate('new');
  }

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
          <Filter
            type="open"
            title="in progress"
            onPress={() => setStatusSelected('open')}
            isActive={statusSelected === 'open'}
          />
          <Filter
            type="closed"
            title="finalized"
            onPress={() => setStatusSelected('closed')}
            isActive={statusSelected === 'closed'}
          />
        </HStack>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Order data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
          ListEmptyComponent={() => (
            <Center>
              <ChatTeardropText color={colors.gray[300]} size={40} />
              <Text color="gray.300" fontSize="xl" mt={6} textAlign="center">
                You still do not have {'\n'}
                requests {statusSelected === 'open' ? 'in progress' : 'ended'}
              </Text>
            </Center>
          )}
        />
        <Button title="New request" onPress={handleNewOrder} />
      </VStack>
    </VStack>
  );
}
