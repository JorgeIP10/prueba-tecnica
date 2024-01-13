import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { createTheme } from "@mui/material/styles";

export const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#fff",
            "--TextField-brandBorderHoverColor": "#fff",
            "--TextField-brandBorderFocusedColor": "#24A8F3",
            "& label.Mui-focused": {
              color: "#fff",
            },
            "& label": {
              color: "rgb(212 212 216)",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            "& input": {
              color: "rgb(212 212 216)",
            },
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor:
                "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]:
            {
              borderColor:
                "var(--TextField-brandBorderFocusedColor)",
            },
            "&.Mui-error": {
              "& input": {
                color: "#FF1717",
              },
            },
          },
        },
      },
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            color: "#FF1717 !important",
          },
        },
      },
    },
  });