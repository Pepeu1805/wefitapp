import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useContext, useState } from "react";
import { FlatList } from "react-native";
import { Repository } from "../../../../@types/repository";
import { RepositoryCard } from "../../../components/RepositoryCard";
import { UserContext } from "../../../context/UserContext";

export function FavoritesScreen() {
  const { username } = useContext(UserContext)
  const [repositorys, setRepositorys] = useState<Repository[]>([])
  const { getItem } = useAsyncStorage("@wefitapp:repositorys");

  async function getRepositorys() {
    const response = await getItem();
    const data = response ? JSON.parse(response) : [];
    setRepositorys(data);
  }

  useFocusEffect(useCallback(() => {
    getRepositorys();
  }, [username]));

  return (
    <FlatList
      style={{ width: '100%' }}
      data={repositorys}
      keyExtractor={item => item.node_id}
      renderItem={({ item }) => (
        <RepositoryCard
          data={item}
        />
      )}
      horizontal={false}
      showsHorizontalScrollIndicator={false}
    />
  )
}