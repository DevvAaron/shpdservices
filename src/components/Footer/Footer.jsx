
import { Box, Typography } from "@mui/material";
import { Titulo2 } from "../Hoocks/Titulos";
import { Link } from "react-router-dom";
const Footer = () => {
  const sections = [
    {
      titulo: "Contacto",
      items: [
        "Soluciones en logística para documentos, mercancías y carga en todo el Perú.",
      ],
    },
    {
      titulo: "Información",
      items: [
        { text: "Nosotros", link: '/' },
        { text: "Contacto", link: '/contacto' },
        { text: "Términos y condiciones", link: '/#' },
        { text: "Brouchers", link: '/#' }
      ],
    },
    {
      titulo: "Sobre el servicio",
      items: [
        { text: "Tracking / Seguimiento", link: '/seguimiento' },
        { text: "¿Cómo funciona?", link: '/#' },
        { text: "Política de privacidad", link: '/#' }
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "#13B5EA",
        color: "#fff",
        padding: 1
      }}
    >
      {/* Secciones principales */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: {
            xs: 'center',
            sm: 'center',
            md: 'center',
          },
          maxWidth: 1200,
          mx: "auto",
        }}
      >
        {sections.map((section, index) => (
          <Box
            key={index}
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              minWidth: { xs: "100%", sm: "250px" },
            }}
          >
            <Titulo2 titulo={section.titulo} />
            {section.items.map((item, i) => {
              const isObject = typeof item === "object" && item !== null;
              const text = isObject ? item.text : item;
              const link = isObject ? item.link : null;

              return link ? (
                <Typography
                  key={i}
                  component={Link}
                  to={link}
                  variant="body2"
                  sx={{
                    mt: 0.5,
                    mb: 1.5,
                    color: "white",
                    fontSize: "0.85rem",
                    ...(i > 0 && {
                      cursor: "pointer",
                      textDecoration: "none",
                      "&:hover": {
                        textDecoration: "underline",
                      },
                    }),
                  }}
                >
                  {text}
                </Typography>
              ) : (
                <Typography
                  key={i}
                  variant="body2"
                  sx={{
                    mt: 0.5,
                    mb: 1.5,
                    fontSize: "0.85rem",
                    ...(i > 0 && {
                      cursor: "pointer",
                      textDecoration: "underline",
                      "&:hover": {
                        textDecoration: "none",
                      },
                    }),
                  }}
                >
                  {text}
                </Typography>
              );
            })}

          </Box>
        ))}
      </Box>

      {/* Línea divisoria */}
      <Box
        sx={{
          borderTop: "1px solid rgba(255, 255, 255, 0.3)",
          my: 3,
        }}
      />

      {/* Footer Bottom */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          px: 1,
        }}
      >
        <Typography variant="body2" sx={{ fontSize: "0.75rem", p: "0.5rem" }}>
          © {new Date().getFullYear()} SPHD Services. Todos los derechos reservados.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
