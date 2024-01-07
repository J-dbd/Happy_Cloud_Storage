/* interfaces */

interface FontSizes {
  title: string;
  xlarge: string;
  medinum: string;
  normal: string;
  small: string;
  //xsamll: string,
}

interface FontWeights {
  bold: string;
}

interface Colors {
  LightBlue: string;
  DarkerBlue: string;
  NavyBlue: string;
  SlientYello: string;
  SlientOrange: string;
  BgWhite: string;
}

interface FontFamilies {
  normal_Gothic: string;
  titleEng: string;
}

interface Unit {
  fontFamily: FontFamilies;
  fontSize: FontSizes;
  fontWeight: FontWeights;
  colors: Colors;
}

/* Unit lists */

const cssUnit: Unit = {
  fontFamily: {
    normal_Gothic: "Noto Sans KR",
    titleEng: "Saira Stencil One",
  },
  fontSize: {
    title: "35px",
    xlarge: "30px",
    medinum: "25px",
    normal: "25px",
    small: "18px",
  },

  fontWeight: {
    bold: "bold",
  },

  colors: {
    LightBlue: "8ECAE6",
    DarkerBlue: "219EBC",
    NavyBlue: "023047",
    SlientYello: "FFB703",
    SlientOrange: "FB8500",
    BgWhite: "F5F5F5",
  },
};

export default cssUnit;
