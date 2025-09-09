

export const Titulo1 = ({ titulo, subtitulo, style }) => {
    return (
        <div className="titulo-animado" style={{ textAlign: 'center', ...style }}>
            <h1 style={{ fontSize: '2.5rem', margin: 0 }}>{titulo}</h1>
            {subtitulo && <p style={{ fontSize: '1.2rem' }}>{subtitulo}</p>}
        </div>
    );
};

export const Titulo2 = ({ titulo }) => {
    return (
        <div className="titulo-animado" style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '1.2rem', margin: 15 }}>{titulo}</h2>
        </div>
    );
};

export const Titulo3 = ({ titulo, subtitulo, mostrarLink = false }) => {
    return (
        <div className="titulo-animado" style={{
            textAlign: 'center', display: "flex", flexDirection: "column", alignItems: "center",
            maxWidth: '25rem',
        }}>
            <h2 style={{
                fontSize: '2rem',
                margin: 0,
                fontWeight: 'bold'
            }}>
                {titulo}
            </h2>
            {subtitulo && (
                <p style={{ fontSize: '1.2rem' }}>
                    {subtitulo}
                    {mostrarLink && <a href="/contacto"> aquí</a>}
                </p>
            )}
        </div>
    );
};
export const Contenido = ({ contenido }) => {
    return (
        <div style={{
            textAlign: 'left', display: "flex", flexDirection: "column", alignItems: "center",
        }}>
            <p style={{ fontSize: '1.2rem' }}>
                {contenido}
            </p>
        </div>
    );
};
export const Subtitulo = ({ subtitulo, style}) => {
    return (
        <div style={{
            textAlign: 'left', display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <p style={{ fontSize: '1rem',
                fontWeight: 'bold' }}>
                {subtitulo}
            </p>
        </div>
    );
};
