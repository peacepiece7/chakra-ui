import { radioCardAnatomy } from "../../anatomy"
import { defineSlotRecipe } from "../../styled-system"
import { radiomarkRecipe } from "./radiomark"

export const radioCardSlotRecipe = defineSlotRecipe({
  className: "chakra-radio-card",
  slots: radioCardAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexDirection: "column",
      gap: "1.5",
    },
    item: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      userSelect: "none",
      position: "relative",
      borderRadius: "l2",
      _focus: {
        bg: "colorPalette.subtle/20",
      },
      _disabled: {
        opacity: "0.8",
        borderColor: "border.disabled",
      },
    },
    label: {
      display: "inline-flex",
      fontWeight: "medium",
      textStyle: "sm",
      _disabled: {
        opacity: "0.5",
      },
    },
    itemText: {
      fontWeight: "medium",
    },
    itemControl: {
      display: "inline-flex",
      flex: "1",
      pos: "relative",
      rounded: "inherit",
      justifyContent: "var(--radio-card-justify)",
      alignItems: "var(--radio-card-align)",
      _disabled: {
        bg: "bg.subtle",
      },
    },
    itemIndicator: radiomarkRecipe.base,
    itemAddon: {
      roundedBottom: "inherit",
      _disabled: {
        color: "fg.subtle",
      },
    },
    itemContent: {
      display: "flex",
      flexDirection: "column",
      flex: "1",
      gap: "1",
      justifyContent: "var(--radio-card-justify)",
      alignItems: "var(--radio-card-align)",
    },
  },

  variants: {
    size: {
      sm: {
        item: {
          textStyle: "sm",
        },
        itemControl: {
          padding: "3",
          gap: "1.5",
        },
        itemAddon: {
          px: "3",
          py: "1.5",
          borderTopWidth: "1px",
        },
        itemIndicator: radiomarkRecipe.variants?.size.sm,
      },
      md: {
        item: {
          textStyle: "sm",
        },
        itemControl: {
          padding: "4",
          gap: "2.5",
        },
        itemAddon: {
          px: "4",
          py: "2",
          borderTopWidth: "1px",
        },
        itemIndicator: radiomarkRecipe.variants?.size.md,
      },
      lg: {
        item: {
          textStyle: "md",
        },
        itemControl: {
          padding: "4",
          gap: "3.5",
        },
        itemAddon: {
          px: "4",
          py: "2",
          borderTopWidth: "1px",
        },
        itemIndicator: radiomarkRecipe.variants?.size.lg,
      },
    },

    variant: {
      surface: {
        item: {
          borderWidth: "1px",
          bg: "bg",
          _checked: {
            bg: "colorPalette.muted",
            color: "colorPalette.fg",
            borderColor: "colorPalette.emphasized",
          },
        },
        itemIndicator: radiomarkRecipe.variants?.variant.solid,
      },

      subtle: {
        item: {
          bg: "bg.subtle",
        },
        itemControl: {
          _checked: {
            bg: "colorPalette.subtle",
            color: "colorPalette.fg",
          },
        },
        itemIndicator: radiomarkRecipe.variants?.variant.outline,
      },

      outline: {
        item: {
          borderWidth: "1px",
          bg: "bg",
          _checked: {
            boxShadow: "0 0 0 1px var(--shadow-color)",
            boxShadowColor: "colorPalette.solid",
            borderColor: "colorPalette.solid",
          },
        },
        itemIndicator: radiomarkRecipe.variants?.variant.solid,
      },

      solid: {
        item: {
          borderWidth: "1px",
          bg: "bg",
          _checked: {
            bg: "colorPalette.solid",
            color: "colorPalette.contrast",
            borderColor: "colorPalette.solid",
          },
        },
        itemIndicator: radiomarkRecipe.variants?.variant.inverted,
      },
    },

    justify: {
      start: {
        item: { "--radio-card-justify": "flex-start" },
      },
      end: {
        item: { "--radio-card-justify": "flex-end" },
      },
      center: {
        item: { "--radio-card-justify": "center" },
      },
    },

    align: {
      start: {
        item: { "--radio-card-align": "flex-start" },
        itemControl: { textAlign: "start" },
      },
      end: {
        item: { "--radio-card-align": "flex-end" },
        itemControl: { textAlign: "end" },
      },
      center: {
        item: { "--radio-card-align": "center" },
        itemControl: { textAlign: "center" },
      },
    },

    orientation: {
      vertical: {
        itemControl: { flexDirection: "column" },
      },
      horizontal: {
        itemControl: { flexDirection: "row" },
      },
    },
  },

  defaultVariants: {
    size: "md",
    variant: "outline",
    align: "start",
    orientation: "horizontal",
  },
})
