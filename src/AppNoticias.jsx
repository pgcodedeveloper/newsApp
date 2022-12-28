import { Box, Button, Container, Grid, Link, Typography } from "@mui/material"
import Formulario from "./components/Formulario"
import ListadoNoticias from "./components/ListadoNoticias"
import useNoticias from "./hooks/useNoticias"
import './styles/index.css'

const AppNoticias = () => {
    const ToTop = () =>{
        document.body.scrollIntoView({ behavior: "smooth"});
        document.body.scrollTo();
    }
    
    const { cargando } = useNoticias();
    return (
        <>
            <header className="header">
            <Typography align="center" marginY={5} component="h1" variant="h3" sx={{
                fontWeight: '900',
                letterSpacing: '2px',
                margin: 0,
                fontStyle: 'italic'
            }}>NewsBrowser</Typography>
            </header>
            <Container>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} md={6}>
                    <Formulario />
                    </Grid>
                </Grid>

                <ListadoNoticias />
            </Container>


            <footer className={cargando ? "footer-fijo" : "footer"}>
                <Box>
                    <Typography variant={'body1'} sx={{
                        fontWeight: '900'
                    }}>Todos los derechos reservados {new Date().getFullYear()} &copy;</Typography>
                </Box>
                <Box>
                    <Grid container spacing={2} alignItems={'center'}>
                        <Grid item>
                            <Link
                                variant={'button'}
                                href="https://www.linkedin.com/in/pablo-gillespie-795a46223"
                                target={'_blank'}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '.5rem',
                                    textDecoration: 'none',
                                    fontWeight: '900'
                                    
                                }}
                                >PG .CODE
                                <img src="/img/linkedin.png" alt="Imagen Linkedin PG.CODE" className="img-link" />
                            </Link>
                        </Grid>
                        <Grid item>
                            <Button 
                                size="small" 
                                sx={{
                                    minWidth: '50px',
                                    minHeight: '50px',
                                    backgroundColor: '#67a0e2'
                                }} 
                                variant='contained'
                                onClick={() => {
                                    ToTop()
                                }}
                                >
                                <img src="/img/top.png" alt="Imagen ir arriba" className="img-arriba"/>
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            
            </footer>
        
        </>
    )
}

export default AppNoticias
