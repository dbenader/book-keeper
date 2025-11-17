
type FontWeightValue = 
  | "100" | "200" | "300" | "400" | "500"
  | "600" | "700" | "800" | "900"
  | "normal" | "bold";


type AppTheme = {
  colors: {
    primary: string;
    background: string;
    text: string;
    border: string;
    muted: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  fonts: {
    regular: {
        fontFamily: string;
        weight: FontWeightValue
    };
    medium: {
        fontFamily: string;
        weight: FontWeightValue
    },
    bold: {
        fontFamily: string;
        weight: FontWeightValue
    }
  };
}

export default AppTheme;