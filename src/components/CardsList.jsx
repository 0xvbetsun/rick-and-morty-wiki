import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const renderCharacters = results => results.map(({ id, image, name, status, location }) => {
    return (
        <Grid item xs={4} key={id}>
            <Card >
                <CardActionArea>
                <CardMedia
                    component="img"
                    image={image}
                    alt={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {location.name}
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    )
});

const CardsList = ({results}) => {
    return results ? 
    (
        <Grid container spacing={3}>
            { renderCharacters(results) }
        </Grid>
    )
    : <p>No data</p>
}

export default CardsList;