
import { Repository } from "../../../../@types/repository";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { ActionBox, Container, Description, FavoriteButton, FavoriteText, LanguageContainer, LanguageText, OpenRepoButton, OpenRepoText, RedCircle, RepoInfo, Title } from "./styles";
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useCallback, useState } from "react";
import { addRepositoryStorage, checkRepositoryStorage, removeRepositoryStorage } from "../../../utils/asyncStorage";
import { useTheme } from "styled-components";
import { Linking } from "react-native";

export default function Details() {
  const theme = useTheme();
  const route = useRoute();
  const Repository = route.params as Repository;
  const [favorited, setFavorited] = useState(true)

  async function checkRepository() {

    const check = await checkRepositoryStorage(Repository.node_id)
    setFavorited(check)
  }

  useFocusEffect(useCallback(() => {
    checkRepository();
  }, []));

  function OpenRepository() {
    Linking.openURL(Repository.html_url.toString())
  }

  async function hundleFavorite() {
    if (favorited) {
      await removeRepositoryStorage(Repository.node_id)
    } else {
      await addRepositoryStorage(Repository)
    }
    checkRepository()
  }

  return (
    <Container>
      <RepoInfo>
        <Title>
          {Repository.full_name}
        </Title>
        <Description>
          {!Repository.description ? "" : Repository.description}
        </Description>

        <LanguageContainer>
          <RedCircle />
          <LanguageText>
            {!Repository.language ? "" : Repository.language}
          </LanguageText>
        </LanguageContainer>
      </RepoInfo>

      <ActionBox>
        <OpenRepoButton onPress={OpenRepository}>
          <OpenRepoText> VER REPOSITÓRIO </OpenRepoText>
          <Feather name="link-2" size={24} color={theme.COLOR.SECUNDARY} />
        </OpenRepoButton>

        <FavoriteButton onPress={hundleFavorite} favorited={favorited}>
          <FavoriteText> {favorited ? "DESFAVORITAR" : "FAVORITAR"} </FavoriteText>
          <Entypo name={favorited ? "star-outlined" : "star"} size={24} color="black" />
        </FavoriteButton>
      </ActionBox>

    </Container>
  )
}