import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ScrollView,
  FlatList,
} from 'react-native';
import { Button } from '@/components/Button';
import { Item } from '@/components/Item';
import { Input } from '@/components/Imput';
import { Filter } from '@/components/Filter';
import { styles } from './styles';
import { FilterStatus } from '@/types/FilterStatus';
import { Header } from 'react-native/Libraries/NewAppScreen';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITEMS = [
  { id: '1', status: FilterStatus.DONE, description: '1 pacote de café' },
  {
    id: '2',
    status: FilterStatus.DONE,
    description: '3 pacotes de macarrão',
  },
  {
    id: '3',
    status: FilterStatus.PENDING,
    description: '3 cebolas',
  },
];

export default function Home() {
  console.log('ITEMS', ITEMS);
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Item
              data={item}
              onStatus={() => console.log('mudar o status')}
              onRemove={() => console.log('remover')}
            />
          )}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={() => (
            <Text style={styles.empty}> Nenhum item aqui.</Text>
          )}
        />
      </View>
    </View>
  );
}
