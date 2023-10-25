import { createTheme } from "@mui/material/styles";
import { createContext, useState, useMemo } from "react";

export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        firstColor: {
          100: "#cdebdd",
          200: "#9bd7bb",
          300: "#6ac498",
          400: "#38b076",
          500: "#069c54",
          600: "#057d43",
          700: "#045e32",
          800: "#023e22",
          900: "#011f11",
        },
        firstColorAlt: {
          100: "#cde7dd",
          200: "#9bcfbb",
          300: "#68b698",
          400: "#369e76",
          500: "#048654",
          600: "#036b43",
          700: "#025032",
          800: "#023622",
          900: "#011b11",
        },
        titleColor: {
          100: "#d7d7d7",
          200: "#b0b0b0",
          300: "#888888",
          400: "#616161",
          500: "#393939",
          600: "#2e2e2e",
          700: "#222222",
          800: "#171717",
          900: "#0b0b0b",
        },
        textColor: {
          100: "#e2e2e2",
          200: "#c6c6c6",
          300: "#a9a9a9",
          400: "#8d8d8d",
          500: "#707070",
          600: "#5a5a5a",
          700: "#434343",
          800: "#2d2d2d",
          900: "#161616",
        },
        textColorLight: {
          100: "#ededed",
          200: "#dbdbdb",
          300: "#cacaca",
          400: "#b8b8b8",
          500: "#a6a6a6",
          600: "#858585",
          700: "#646464",
          800: "#424242",
          900: "#212121",
        },
        bodyColor: {
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#cccccc",
          700: "#999999",
          800: "#666666",
          900: "#333333",
        },
      }
    : {
        firstColor: {
          100: "#011f11",
          200: "#023e22",
          300: "#045e32",
          400: "#057d43",
          500: "#069c54",
          600: "#38b076",
          700: "#6ac498",
          800: "#9bd7bb",
          900: "#cdebdd",
        },
        firstColorAlt: {
          100: "#011b11",
          200: "#023622",
          300: "#025032",
          400: "#036b43",
          500: "#048654",
          600: "#369e76",
          700: "#68b698",
          800: "#9bcfbb",
          900: "#cde7dd",
        },
        titleColor: {
          100: "#0b0b0b",
          200: "#171717",
          300: "#222222",
          400: "#2e2e2e",
          500: "#393939",
          600: "#616161",
          700: "#888888",
          800: "#b0b0b0",
          900: "#d7d7d7",
        },
        textColor: {
          100: "#161616",
          200: "#2d2d2d",
          300: "#434343",
          400: "#5a5a5a",
          500: "#707070",
          600: "#8d8d8d",
          700: "#a9a9a9",
          800: "#c6c6c6",
          900: "#e2e2e2",
        },
        textColorLight: {
          100: "#212121",
          200: "#424242",
          300: "#646464",
          400: "#858585",
          500: "#a6a6a6",
          600: "#b8b8b8",
          700: "#cacaca",
          800: "#dbdbdb",
          900: "#ededed",
        },
        bodyColor: {
          100: "#333333",
          200: "#666666",
          300: "#999999",
          400: "#cccccc",
          500: "#ffffff",
          600: "#ffffff",
          700: "#ffffff",
          800: "#ffffff",
          900: "#ffffff",
        },
      }),
});

export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.firstColor[500],
            },
            secondary: {
              main: colors.firstColorAlt[500],
            },
            neutral: {
              dark: colors.textColor[700],
              main: colors.textColor[500],
              light: colors.textColor[100],
            },
            background: {
              default: colors.bodyColor[500],
            },
          }
        : {
            primary: {
              main: colors.firstColor[100],
            },
            secondary: {
              main: colors.firstColorAlt[500],
            },
            neutral: {
              dark: colors.textColor[700],
              main: colors.textColor[500],
              light: colors.textColor[100],
            },
            background: {
              default: colors.bodyColor[500],
            },
          }),
    },

    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Poppins", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};

export const ColorModeContext = createContext({
    toggleColorMode: () => {},
});

export const useMode = () => {
    const [mode, setMode] = useState('dark')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
            }
        }),
        []
    )

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
}
