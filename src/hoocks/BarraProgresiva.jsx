import { Box } from "@mui/material";

export default function BarraProgresiva({ steps = 8, activeStep = 1, sx = {} }) {
    return (
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={2}
            sx={{ ...sx }}
        >
            {Array.from({ length: steps }).map((_, index) => {
                const stepNumber = index + 1;
                const isActive = stepNumber === activeStep;

                return (
                    <Box
                        key={index}
                        sx={{
                            width: 30,
                            height: 30,
                            borderRadius: "50%",
                            backgroundColor: isActive ? "#1d56ff" : "#ccc", // activo = azul, inactivo = gris
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "white",
                            fontWeight: "bold",
                            fontSize: "0.8rem",
                            transition: "all 0.3s ease",
                        }}
                    />
                );
            })}
        </Box>
    );
}
