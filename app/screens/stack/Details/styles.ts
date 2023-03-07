import styled from "styled-components/native";
import { FONT } from "../../../constants/fonts/font";

export const Container = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const RepoInfo = styled.View`
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
  width: 100%;
`

export const Title = styled.Text`
  font-family: ${FONT.FONT_FAMILY.INTER_BOLD};
  color: ${({ theme }) => theme.COLOR.TEXT};
  font-size: ${FONT.FONT_SIZE.LG};
  margin: 16px;
`

export const Description = styled.Text`
  font-family: ${FONT.FONT_FAMILY.INTER_REGULAR};
  color: ${({ theme }) => theme.COLOR.LIGHT_TEXT};
  font-size: ${FONT.FONT_SIZE.MD};
  margin: 0px 16px;
`

export const LanguageContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 16px;
  line-height: 19px;
`

export const RedCircle = styled.View`
  height: 9px;
  width: 9px;
  background-color: red;
  border-radius: 50px;
`

export const LanguageText = styled.Text`
  margin-left: 6px;
  font-family: ${FONT.FONT_FAMILY.INTER_REGULAR};
  color: ${({ theme }) => theme.COLOR.LIGHT_TEXT};
  font-size: ${FONT.FONT_SIZE.SM};
  margin-left: 6px;
`

export const ActionBox = styled.View`
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
  width: 100%;
`

export const OpenRepoButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
  margin-top: 16px;
`

export const OpenRepoText = styled.Text`
  color: ${({ theme }) => theme.COLOR.SECUNDARY};
  font-family: ${FONT.FONT_FAMILY.ROBOTO_Medium};
  margin: 8px;
`

interface propsFavoriteButton {
  favorited: boolean
}

export const FavoriteButton = styled.TouchableOpacity<propsFavoriteButton>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 16px;
  border-radius: 4px;
  box-shadow: ${({ favorited, theme }) => favorited ? "none" : "0px 3px 1px rgba(0, 0, 0, 0.2)"};
  background-color: ${({ favorited, theme }) => favorited ? theme.COLOR.BACKGROUND : theme.COLOR.PRIMARY};
  border: ${({ favorited, theme }) => favorited ? "1px solid " + theme.COLOR.TEXT : "none"};
`

export const FavoriteText = styled.Text`
  color: ${({ theme }) => theme.COLOR.TEXT};
  font-family: ${FONT.FONT_FAMILY.ROBOTO_Medium};
  margin: 8px;
`