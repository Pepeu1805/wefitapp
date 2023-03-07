import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useContext, useState } from "react";
import { FlatList } from "react-native";
import { Repository } from "../../../../@types/repository";
import { RepositoryCard } from "../../../components/RepositoryCard";
import { UserContext } from "../../../context/UserContext";
import { ApiGitHub } from "../../../services/ApiGitHub";

export function HomeScreen() {
  const { username } = useContext(UserContext)
  const [repositorys, setRepositorys] = useState<Repository[]>([])

  async function getRepositorys() {
    const response = await ApiGitHub.get(`/users/${username}/repos`)
    setRepositorys(response.data)
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