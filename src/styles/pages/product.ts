import { styled } from "..";

export const ProductContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  alignItems: "stretch", // vai fazer com que as duas colunas do grid estiquem pra ter o mesmo tamanho verticalmente
  justifyContent: "space-between",
  gap: "4rem",
  width: "100%",
  maxWidth: "86%",
  margin: "0 auto",
});

export const ImageContainer = styled("div", {
  minWidth: "100%",
  maxWidth: 576,
  //height: 'calc(656px - 0.5rem)', // 0.5rem é para diminir o padding de cima e de baixo (0.25rem) - poderia ser resolvido também com box-sizing
  minHeight: "100%",
  maxHeight: 656,
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "0px 0px 48px rgba(0, 0, 0, 0.9)",
  img: {
    objectFit: "cover", // para a imagem não ficar distorcida quando ela for carregada com uma resolução diferente
  },
});

export const ProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  h1: {
    fontSize: "$2xl",
    color: "$gray300",
  },
  span: {
    marginTop: "1rem",
    display: "block",
    fontSize: "$2xl",
    color: "$green300",
  },
  p: {
    marginTop: "2.5rem",
    fontSize: "$md",
    lineHeight: 1.6,
    color: "$gray300",
  },
  button: {
    marginTop: "auto", // colocando auto o botão é jogado lá para baixo
    backgroundColor: "$green500",
    border: 0,
    color: "$white",
    borderRadius: 8,
    padding: "1.25rem",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "$md",
    '&:hover': {
      filter: 'brightness(0.7)',
    }
  },
});
