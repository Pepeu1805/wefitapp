import { View } from "react-native";
import { Repository } from "../../../@types/repository";
import { BottomContainer, Container, Description, FavoriteButton, FavoriteButtonText, Header, Icon, LanguageContainer, LanguageText, RedCircle, StarCount, StarCountText, Title } from "./style";
import { MaterialIcons } from '@expo/vector-icons';
import { CardLine } from "../CardLine";
import { useTheme } from 'styled-components';
import { useFocusEffect, useNavigation, useNavigationState } from "@react-navigation/native";
import { addRepositoryStorage, checkRepositoryStorage } from "../../utils/asyncStorage";
import { useCallback, useState } from "react";

interface Props {
  data: Repository;
}

export function RepositoryCard({ data }: Props) {
  const [favorited, setFavorited] = useState(true)
  const screenName = useNavigationState((state) => state.routes[state.index].name)
  const navigation = useNavigation()

  const theme = useTheme();

  async function setFavorite() {
    await addRepositoryStorage(data)
    checkRepository();
  }

  function openDetails() {
    navigation.navigate("Details", data);
  }

  async function checkRepository() {
    const check = await checkRepositoryStorage(data.node_id)
    setFavorited(check)
  }

  useFocusEffect(useCallback(() => {
    checkRepository();
  }, []));

  if (favorited && screenName === "Repository") {
    return <></>
  }

  return (
    <Container onPress={openDetails}>
      <Header>
        <Title>
          {data.full_name}
        </Title>
        <Icon source={{ uri: data.owner.avatar_url }} />
      </Header>

      <CardLine />

      <View>
        <Description numberOfLines={2}>
          {!data.description ? "" : data.description}
        </Description>
      </View>
      <BottomContainer>
        {screenName === "Repository" ? (
          <FavoriteButton onPress={setFavorite}>
            <MaterialIcons name="star" color={theme.COLOR.PRIMARY} size={18} />
            <FavoriteButtonText> Favoritar </FavoriteButtonText>
          </FavoriteButton>
        ) : <></>}

        <StarCount>
          <MaterialIcons name="star" color={theme.COLOR.PRIMARY} size={18} />
          <StarCountText>{data.stargazers_count}</StarCountText>
        </StarCount>

        <LanguageContainer>
          <RedCircle />
          <LanguageText>
            {!data.language ? "" : data.language}
          </LanguageText>
        </LanguageContainer>
      </BottomContainer>
    </Container>
  )
}