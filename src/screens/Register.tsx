import { VStack } from 'native-base';

import { Header } from '../components/Header';
import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="New request" />
      <Input placeholder="Patrimony registration number" mt={4} />
      <Input
        placeholder="Issue description"
        flex={1}
        mt={5}
        multiline
        textAlignVertical="top"
      />
      <Button title="Register" mt={5} />
    </VStack>
  );
}
