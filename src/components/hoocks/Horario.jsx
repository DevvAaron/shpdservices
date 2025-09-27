import { useState, useEffect } from "react";

const horarios = {
    lunes: { inicio: 9, fin: 18 },
    martes: { inicio: 9, fin: 18 },
    miercoles: { inicio: 9, fin: 18 },
    jueves: { inicio: 9, fin: 18 },
    viernes: { inicio: 9, fin: 18 },
    sábado: { inicio: 9, fin: 18 },
};

export default function Horario() {
    const [estado, setEstado] = useState("");

    useEffect(() => {
        const hoy = new Date();
        const dia = hoy.toLocaleDateString("es-ES", { weekday: "long" });
        const hora = hoy.getHours();

        if (horarios[dia] && hora >= horarios[dia].inicio && hora < horarios[dia].fin) {
            setEstado("✅");
        } else {
            setEstado("❌");
        }
    }, []);

    return <>{estado}</>;
}
