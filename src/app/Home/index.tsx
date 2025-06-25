import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Button } from '@/components/Button';
import { styles } from './styles';
import { Item } from '@/components/Item';
import { Input } from '@/components/Imput';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Header } from 'react-native/Libraries/NewAppScreen';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];

export default function Home() {
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

        <Item
          data={{ status: FilterStatus.DONE, description: 'Café' }}
          onStatus={() => console.log('mudar o status')}
          onRemove={() => console.log('remover')}
        />
      </View>
    </View>
  );
}
