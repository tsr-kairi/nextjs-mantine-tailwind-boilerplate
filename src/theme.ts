import { createTheme } from "@mantine/core";
import { appConfig } from "./config/app";

const theme = createTheme({
    colors: {
        bottle_green: [
            appConfig.colors.bottle_green[50],
            appConfig.colors.bottle_green[100],
            appConfig.colors.bottle_green[200],
            appConfig.colors.bottle_green[300],
            appConfig.colors.bottle_green[400],
            appConfig.colors.bottle_green[500],
            appConfig.colors.bottle_green[600],
            appConfig.colors.bottle_green[700],
            appConfig.colors.bottle_green[800],
            appConfig.colors.bottle_green[900],
            appConfig.colors.bottle_green[950],
        ],
        citrine_white: [
            appConfig.colors.citrine_white[50],
            appConfig.colors.citrine_white[100],
            appConfig.colors.citrine_white[200],
            appConfig.colors.citrine_white[300],
            appConfig.colors.citrine_white[400],
            appConfig.colors.citrine_white[500],
            appConfig.colors.citrine_white[600],
            appConfig.colors.citrine_white[700],
            appConfig.colors.citrine_white[800],
            appConfig.colors.citrine_white[900],
            appConfig.colors.citrine_white[950],
        ],
        white: [
            appConfig.colors.white[50],
            appConfig.colors.white[100],
            appConfig.colors.white[200],
            appConfig.colors.white[300],
            appConfig.colors.white[400],
            appConfig.colors.white[500],
            appConfig.colors.white[600],
            appConfig.colors.white[700],
            appConfig.colors.white[800],
            appConfig.colors.white[900],
            appConfig.colors.white[950],
        ],
        error: [
            appConfig.colors.error[50],
            appConfig.colors.error[100],
            appConfig.colors.error[200],
            appConfig.colors.error[300],
            appConfig.colors.error[400],
            appConfig.colors.error[500],
            appConfig.colors.error[600],
            appConfig.colors.error[700],
            appConfig.colors.error[800],
            appConfig.colors.error[900],
            appConfig.colors.error[950],
        ],
    },
    fontFamily: 'inherit',
    // primaryColor: 'primary',
    // primaryShade: 4,
});

export default theme;