import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: '#786447'
        },
        secondary: {
            main: '#ECE0CB',
        },
    },
    typography: {
        fontFamily: "JetBrains Mono"
    }
});

theme = responsiveFontSizes(theme);

export default theme;