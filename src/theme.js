import { createTheme } from "@mantine/core";

const fontFamily = [
  "Montserrat",
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
  '"Apple Color Emoji"',
  '"Segoe UI Emoji"',
  '"Segoe UI Symbol"',
].join(",");

export const theme = createTheme({
  fontFamily,
  colors: {
    dark: [
      "#F9FAFB",
      "#F3F4F6",
      "#E5E7EB",
      "#D1D5DB",
      "#9CA3AF",
      "#6B7280",
      "#4B5563",
      "#374151",
      "#1F2937",
      "#111827",
    ],
    error: [
      "#FFF5F5",
      "#FFE3E3",
      "#FFC9C9",
      "#FFA8A8",
      "#FF8787",
      "#FF6B6B",
      "#FA5252",
      "#F03E3E",
      "#E03131",
      "#C92A2A",
    ],
    primary: [
      "#F1FBE9",
      "#D8F4C3",
      "#BFED9C",
      "#A7E675",
      "#8EDE4E",
      "#75D728",
      "#5DAC20",
      "#468118",
      "#2F5610",
      "#172B08",
    ],
  },
  black: "#626262",
  primaryColor: "primary",
  defaultRadius: 6,
  headings: {
    fontFamily,
  },
});
