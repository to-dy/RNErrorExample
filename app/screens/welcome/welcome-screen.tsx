import React from "react"
import { View, ViewStyle, ImageStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { Text, Button as NButton, ChevronLeftIcon} from "native-base"
import { Screen, AutoImage as Image } from "../../components"
import { color, spacing } from "../../theme"
const bowserLogo = require("./bowser.png")

const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[4],
}
const BOWSER: ImageStyle = {
  alignSelf: "center",
  marginVertical: spacing[5],
  maxWidth: "100%",
  width: 343,
  height: 230,
}

export const WelcomeScreen = observer(function WelcomeScreen() {
  return (
    <View testID="WelcomeScreen" style={FULL}>
      <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
        <NButton
          variant="ghost"
          _text={{ color: "secondary.500", fontWeight: "800", fontSize: "lg" }}
          startIcon={<ChevronLeftIcon size={5} mt={0.5} color="secondary.500" alignSelf="flex-start" />}
          pr={2}
          pb={2}
          pl={0}
          pt={2}
        >
          Testing
        </NButton>

          <Text fontWeight="800" fontSize="2xl" color="secondaryLight.500" mb={5}>
              Test
          </Text>

         <Image source={bowserLogo} style={BOWSER} /> 

      </Screen>
    </View>
  )
})
