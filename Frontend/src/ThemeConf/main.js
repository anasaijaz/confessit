import { createTheme } from "@mui/material/styles";
import {grey} from "@mui/material/colors";

export default createTheme({
    "breakpoints": {
        "keys": [
            "xs",
            "sm",
            "md",
            "lg",
            "xl"
        ],
        "values": {
            "xs": 0,
            "sm": 600,
            "md": 900,
            "lg": 1200,
            "xl": 1536
        },
        "unit": "px"
    },
    "direction": "ltr",
    "components": {
        MuiAppBar: {
            styleOverrides: {
                root:{
                    borderBottom: '1px solid grey',
                },
                colorDefault: {
                    backgroundColor: 'white'
                }
            }
        },
        "MuiCssBaseline": {
            "styleOverrides": {
                "body": {
                    backgroundColor: grey["50"]
                }
            }
        },
        "MuiButtonBase": {
            "defaultProps": {
                "disableTouchRipple": true
            }
        },
        "MuiButton": {
            "defaultProps": {
                "disableElevation": true
            },
            "styleOverrides": {
                "sizeLarge": {
                    "padding": "1rem 1.25rem",
                    "fontSize": "1rem",
                    "lineHeight": 1.3125,
                    "letterSpacing": 0,
                    "fontWeight": 700
                },
                "containedPrimary": {
                    "backgroundColor": "#007FFF",
                    "color": "#fff"
                }
            },
            "variants": [{
                "props": {
                    "variant": "code"
                },
                "style": {
                    "color": "#2F3A45",
                    "border": "1px solid",
                    "borderColor": "#E5E8EC",
                    "backgroundColor": "#F3F6F9",
                    "fontSize": "0.875rem",
                    "lineHeight": 1.5,
                    "letterSpacing": 0,
                    "fontFamily": "Consolas,Menlo,Monaco,Andale Mono,Ubuntu Mono,monospace",
                    "fontWeight": 600,
                    "WebkitFontSmoothing": "subpixel-antialiased",
                    "&:hover, &.Mui-focusVisible": {
                        "borderColor": "#007FFF",
                        "backgroundColor": "#F0F7FF",
                        "& .MuiButton-endIcon": {
                            "color": "#007FFF"
                        }
                    },
                    "& .MuiButton-startIcon": {
                        "color": "#BFC7CF"
                    },
                    "& .MuiButton-endIcon": {
                        "color": "#46505A"
                    }
                }
            }]
        },
        "MuiContainer": {
            "styleOverrides": {
                "root": {
                    "@media (min-width:900px)": {
                        "paddingLeft": "16px",
                        "paddingRight": "16px"
                    }
                }
            }
        },
        MuiFilledInput: {
          root: {
          }
        },
        "MuiDivider": {
            "styleOverrides": {
                "root": {
                    "borderColor": "#EAEEF3"
                }
            }
        },
        "MuiLink": {
            "defaultProps": {
                "underline": "none"
            },
            "styleOverrides": {
                "root": {
                    "color": "#0072E5",
                    "fontWeight": 700,
                    "display": "inline-flex",
                    "alignItems": "center",
                    "&.MuiTypography-body1 > svg": {
                        "marginTop": 2
                    },
                    "& svg:last-child": {
                        "marginLeft": 2
                    }
                }
            }
        },
        "MuiListItemButton": {
            "styleOverrides": {
                "root": {
                    "borderRadius": 5,
                    "&:hover, &:focus": {
                        "backgroundColor": "#EAEEF3"
                    }
                }
            }
        },
        "MuiSelect": {
            "defaultProps": {
                "IconComponent": {
                    "type": {},
                    "compare": null
                }
            },
            "styleOverrides": {
                "iconFilled": {
                    "top": "calc(50% - .25em)"
                }
            }
        },
        "MuiTab": {
            "defaultProps": {
                "disableTouchRipple": true
            }
        },
        "MuiPaper": {
            "styleOverrides": {
                "root": {
                    "backgroundColor": "#fff",
                    "&[href]": {
                        "textDecorationLine": "none"
                    }
                },
                "outlined": {
                    "display": "block",
                    "borderColor": "#E5E8EC",
                    "a&, button&": {
                        "&:hover": {
                            "boxShadow": "1px 1px 20px 0 rgb(90 105 120 / 20%)"
                        }
                    }
                }
            }
        },
        "MuiTableCell": {
            "styleOverrides": {
                "root": {
                    "padding": "8px 16px",
                    "borderColor": "#E5E8EC"
                },
                "head": {
                    "color": "#20262D",
                    "fontWeight": 700
                },
                "body": {
                    "color": "#46505A"
                }
            }
        },
        "MuiToggleButtonGroup": {
            "styleOverrides": {
                "root": {
                    "backgroundColor": "#fff"
                }
            }
        },
        "MuiToggleButton": {
            "styleOverrides": {
                "root": {
                    "textTransform": "none",
                    "fontWeight": 700,
                    "color": "#46505A",
                    "borderColor": "#E5E8EC",
                    "&.Mui-selected": {
                        "borderColor": "#007FFF !important",
                        "color": "#007FFF",
                        "backgroundColor": "#F0F7FF"
                    }
                }
            }
        },
        "MuiTooltip": {
            "styleOverrides": {
                "tooltip": {
                    "paddingTop": 7,
                    "paddingBottom": 7
                }
            }
        },
        MuiToolbar: {
           styleOverrides: {
               root: {
               }
           }
        },
        "MuiSwitch": {
            "styleOverrides": {
                "root": {
                    "width": 32,
                    "height": 20,
                    "padding": 0,
                    "& .MuiSwitch-switchBase": {
                        "&.Mui-checked": {
                            "transform": "translateX(11px)",
                            "color": "#fff"
                        }
                    }
                },
                "switchBase": {
                    "height": 20,
                    "width": 20,
                    "padding": 0,
                    "color": "#fff",
                    "&.Mui-checked + .MuiSwitch-track": {
                        "opacity": 1
                    }
                },
                "track": {
                    "opacity": 1,
                    "borderRadius": 32,
                    "backgroundColor": "#BFC7CF"
                },
                "thumb": {
                    "flexShrink": 0,
                    "width": "14px",
                    "height": "14px"
                }
            }
        }
    },
    "palette": {
        "mode": "light",
        blue: {
            light: "#8EBDFF"
        },
        green: {
            light: "rgba(84, 255, 163, 0.53)",
            dark: "rgba(84, 255, 163, 1)"

        },
        yellow: {
            light: "#FFD600"

        },
        "primary": {
            "50": "#ffecef",
            "100": "#fecfd5",
            "200": "#ef9ea0",
            "300": "#e5787b",
            "400": "#f05a5a",
            "500": "#f54b42",
            "600": "#e74241",
            "700": "#d4393a",
            "800": "#c73333",
            "900": "#b82827",
            "main": "#f05a5a",
            "light": "#fecfd5",
            "dark": "#c73333",
            "contrastText": "#fff"
        },
        "divider": "#E5E8EC",
        "primaryDark": {
            "50": "#E2EDF8",
            "100": "#CEE0F3",
            "200": "#91B9E3",
            "300": "#5090D3",
            "400": "#265D97",
            "500": "#1E4976",
            "600": "#173A5E",
            "700": "#132F4C",
            "800": "#001E3C",
            "900": "#0A1929",
            "main": "#5090D3"
        },
        "common": {
            "black": "#1D1D1D",
            "white": "#fff"
        },
        "text": {
            "primary": "#20262D",
            "secondary": grey.A400,
            "disabled": "rgba(0, 0, 0, 0.38)"
        },
        "grey": {
            "50": "#F3F6F9",
            "100": "#EAEEF3",
            "200": "#E5E8EC",
            "300": "#D7DCE1",
            "400": "#BFC7CF",
            "500": "#AAB4BE",
            "600": "#7F8E9D",
            "700": "#46505A",
            "800": "#2F3A45",
            "900": "#20262D",
            "A100": "#f5f5f5",
            "A200": "#eeeeee",
            "A400": "#bdbdbd",
            "A700": "#616161"
        },
        "error": {
            "50": "#FFF0F1",
            "100": "#FFDBDE",
            "200": "#FFBDC2",
            "300": "#FF99A2",
            "400": "#FF7A86",
            "500": "#FF505F",
            "600": "#EB0014",
            "700": "#C70011",
            "800": "#94000D",
            "900": "#570007",
            "main": "#EB0014",
            "light": "#FF99A2",
            "dark": "#C70011",
            "contrastText": "#fff"
        },
        "success": {
            "50": "#E9FBF0",
            "100": "#C6F6D9",
            "200": "#9AEFBC",
            "300": "#6AE79C",
            "400": "#3EE07F",
            "500": "#21CC66",
            "600": "#1DB45A",
            "700": "#1AA251",
            "800": "#178D46",
            "900": "#0F5C2E",
            "main": "#1AA251",
            "light": "#6AE79C",
            "dark": "#1AA251",
            "contrastText": "#fff"
        },
        "warning": {
            "50": "#FFF9EB",
            "100": "#FFF4DB",
            "200": "#FFEDC2",
            "300": "#FFE4A3",
            "400": "#FFD980",
            "500": "#FCC419",
            "600": "#FAB005",
            "700": "#F1A204",
            "800": "#DB9A00",
            "900": "#8F6400",
            "main": "#F1A204",
            "light": "#FFE4A3",
            "dark": "#F1A204",
            "contrastText": "rgba(0, 0, 0, 0.87)"
        },
        "secondary": {
            "main": "#42464f",
            "light": "#9ea3ad",
            "dark": "#21252d",
            "contrastText": "#fff"
        },
        "info": {
            "main": "#0288d1",
            "light": "#03a9f4",
            "dark": "#01579b",
            "contrastText": "#fff"
        },
        "contrastThreshold": 3,
        "tonalOffset": 0.2,
        "background": {
            "paper": "#fff",
            "default": "#fff"
        },
        "action": {
            "active": "rgba(0, 0, 0, 0.54)",
            "hover": "rgba(0, 0, 0, 0.04)",
            "hoverOpacity": 0.04,
            "selected": "rgba(0, 0, 0, 0.08)",
            "selectedOpacity": 0.08,
            "disabled": "rgba(0, 0, 0, 0.26)",
            "disabledBackground": "rgba(0, 0, 0, 0.12)",
            "disabledOpacity": 0.38,
            "focus": "rgba(0, 0, 0, 0.12)",
            "focusOpacity": 0.12,
            "activatedOpacity": 0.12
        }
    },
    "shape": {
        "borderRadius": 10
    },
    "unstable_strictMode": true,
    heading: "72px",
    backgrounds: {
        image: {
            login: "https://i.pinimg.com/originals/99/8e/05/998e055aba57c24138220937cc5166ab.gif",
            signup: "https://i.pinimg.com/originals/5f/ee/8e/5fee8e4a9fea271529cfd8828dd990d5.gif"
        },
        color: {
            lightBlue: "rgba(238,245,255,0.49)",
            lightYellow: "rgba(255,214,0, 0.49)",
            mediumBlue: "#E9F2FF"
        }
    },
    "typography": {
        secondaryFontFamily: "'Autography', sans-serif",
        tertiaryFontFamily: "'Yeseva One', cursive",
        "fontFamily": "'Causten',sans-serif",

        "fontWeightExtraBold": 800,
        "h1": {
            "fontSize": "clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",
            "fontWeight": 800,
            "lineHeight": 1.1142857142857143,
            "color": "#0A1929"
        },
        "h2": {
            "fontSize": "clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",
            "fontWeight": 800,
            "lineHeight": 1.2222222222222223,
            "color": "#132F4C"
        },
        "h3": {
            "fontSize": "2.25rem",
            "lineHeight": 1.2222222222222223,
            "letterSpacing": 0,
            "fontWeight": 400
        },
        "h4": {
            "fontSize": "1.75rem",
            "lineHeight": 1.5,
            "letterSpacing": 0,
            "fontWeight": 400
        },
        "h5": {
            "fontSize": "1.5rem",
            "lineHeight": 1.5,
            "letterSpacing": 0,
            "fontWeight": 400
        },
        "h6": {
            "fontSize": "1.25rem",
            "lineHeight": 1.5,
            "letterSpacing": 0,
            "fontWeight": 500
        },
        "button": {
            "textTransform": "initial",
            "fontWeight": 700,
            "letterSpacing": 0,
            "fontSize": "0.875rem",
            "lineHeight": 1.75
        },
        "subtitle1": {
            "fontSize": "1.125rem",
            "lineHeight": 1.3333333333333333,
            "letterSpacing": 0,
            "fontWeight": 500,
        },
        "body1": {
            "fontSize": "1rem",
            "lineHeight": 1.5,
            "letterSpacing": 0,
            "fontWeight": 400
        },
        "body2": {
            "fontSize": "0.700rem",
            "lineHeight": 1.5,
            "letterSpacing": 0,
            "fontWeight": 500
        },
        "caption": {
            "display": "inline-block",
            "fontSize": "0.75rem",
            "lineHeight": 1.5,
            "letterSpacing": 0,
            "fontWeight": 700,
        },
        "htmlFontSize": 12,
        "fontSize": 12,
        "fontWeightLight": 300,
        "fontWeightRegular": 400,
        "fontWeightMedium": 500,
        "fontWeightBold": 700,
        "subtitle2": {
            "fontWeight": 500,
            "fontSize": "0.875rem",
            "lineHeight": 1.57
        },
        "overline": {
            "fontWeight": 400,
            "fontSize": "0.75rem",
            "lineHeight": 2.66,
            "textTransform": "uppercase"
        }
    },
    "nprogress": {
        "color": "#007FFF"
    },
    "props": {
        "MuiBadge": {
            "overlap": "rectangular"
        }
    },
    "mixins": {
        padded: {
            "@media (min-width:0px) and (orientation: landscape)": {
                paddingRight: '0rem',
                paddingLeft: '0rem'
            },
            "@media (min-width:600px)": {
                paddingRight: '20rem',
                paddingLeft: '20rem'
            }
        },
        "toolbar": {
            "minHeight": 56,
            "@media (min-width:0px) and (orientation: landscape)": {
                "minHeight": 48
            },
            "@media (min-width:600px)": {
                "minHeight": 64
            }
        }
    },
    pShadows: ["rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        "rgba(0, 0, 0, 0.1) 0px 4px 12px"
    ],
    "shadows": [
        "none",
        "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
        "0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)",
        "0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)",
        "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
        "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
        "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
        "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
        "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
        "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
        "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
        "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
        "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
        "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
        "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
        "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
        "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
        "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
        "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
        "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
        "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
        "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
        "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)"
    ],
    "transitions": {
        "easing": {
            "easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
            "easeOut": "cubic-bezier(0.0, 0, 0.2, 1)",
            "easeIn": "cubic-bezier(0.4, 0, 1, 1)",
            "sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
        },
        "duration": {
            "shortest": 150,
            "shorter": 200,
            "short": 250,
            "standard": 300,
            "complex": 375,
            "enteringScreen": 225,
            "leavingScreen": 195
        }
    },
    "zIndex": {
        "mobileStepper": 1000,
        "speedDial": 1050,
        "appBar": 1100,
        "drawer": 1200,
        "modal": 1300,
        "snackbar": 1400,
        "tooltip": 1500
    }
});
