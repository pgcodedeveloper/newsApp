import { Grid, Typography, Stack, Pagination } from "@mui/material"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia";
import Spinner from "./Spinner";
const ListadoNoticias = () => {

    const { noticias, totalPagina, handlePagina, pagina, cargando } = useNoticias();

    const totalPages= Math.ceil(totalPagina / 20);
    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant={'h3'}
                component={'h2'}
            >Últimas Noticias</Typography>
            {cargando ? <Spinner /> : (
                <>
                    <Grid container spacing={2}>
                        {noticias.map(noticia => (
                            <Noticia key={noticia.url} noticia={noticia}/>
                        ))}
                    </Grid>
                    <Stack
                        sx={{
                            marginY: 5
                        }} 
                        spacing={2}
                        direction= 'row'
                        alignItems={'center'}
                        justifyContent='center'
                    >
                        <Pagination 
                            count={totalPages}
                            color='primary'
                            onChange={handlePagina}
                            page={pagina}
                        />
                    </Stack>
                </>
            )}
            
        </>
    )
}

export default ListadoNoticias
