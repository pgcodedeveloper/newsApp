import { Card, CardActions,CardActionArea, CardContent, CardMedia, Link, Typography, Grid } from "@mui/material";

const Noticia = ({noticia}) => {

    const { urlToImage, url, title, description, source } = noticia;
    
    return (
        <Grid item md={6} lg={4}>
            <Card sx={{
                maxHeight: '200'
            }}
            >   
                <CardActionArea color="primary">
                    {urlToImage && (
                        <CardMedia 
                            component={'img'}
                            alt={`Imagen noticia ${title}`}
                            image={urlToImage}
                            height={'250'}
                        />
                    )}
                    
                    <CardContent>
                        <Typography variant="body1" color="error">
                            {source.name}
                        </Typography>
                        <Typography variant="h5" component={'div'} sx={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: '2',
                            overflow: 'hidden'
                        }}>
                            {title}
                        </Typography>

                        <Typography variant="body2" sx={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: '2',
                            overflow: 'hidden'
                        }}>
                            {description}
                        </Typography>
                    </CardContent>

                </CardActionArea>

                <CardActions sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Link
                        href={url}
                        target="_blank"
                        variant="button"
                        textAlign={'center'}
                        sx={{
                            textDecoration: 'none',
                            padding: '1rem 3rem',
                            display: 'inline-block',
                            backgroundColor: '#1565C0',
                            borderRadius: '1rem',
                            color: 'white',
                            fontWeight: '700'
                        }}
                    >Leer Noticia</Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Noticia
