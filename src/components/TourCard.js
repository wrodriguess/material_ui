import { Paper, Grid, Typography, Box, Rating, createTheme, ThemeProvider } from '@mui/material';
import { AccessTime } from '@mui/icons-material'

const theme = createTheme({
    components: {
        MuiTypography:{
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11,
                    },
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                    },
                },
            ],
        },
    },
})

function TourCard(props){
    return(
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img src={props.tour.image} alt="image" className="img"/>
                    <Box paddingX={1}>
                        <Typography variant="subtitle1" component="h2" >{props.tour.name}</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center"
                    }}>
                        <AccessTime sx={{width: 12.5}}/>
                        <Typography variant="body2" component="p" marginLeft={0.5}>{props.tour.duration} hours</Typography>
                    </Box>
                    <Box sx={{
                        display: "flex",
                        alignItems: "center",
                        
                    }} marginTop={3}>
                        <Rating name="read-only" value={props.tour.rating} readOnly precision={0.5} size="small"/>
                        <Typography variant="body2" component="p" marginLeft={0.5}>{props.tour.rating}</Typography>
                        <Typography variant="body3" component="p" marginLeft={1.5}>({props.tour.numberOfReviews} reviews)</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h3" martginTop={0}>From C ${props.tour.price}</Typography>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    )
}

export default TourCard