import { View, Image } from 'react-native';
import { Button } from '@/components/Button';
import { styles } from './styles';
import { Input } from '@/components/Imput';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder="O que você precisa comprar?" />
        <Button title="Entrar" />
      </View>
      <View style={styles.content}>
        <Filter status={FilterStatus.DONE} isActive />
        <Filter status={FilterStatus.PENDING} isActive={false} />
      </View>
    </View>
  );
}
