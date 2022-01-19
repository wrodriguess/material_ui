import { Container, Typography, Box, BottomNavigation, Paper  } from '@mui/material';
import ImageCollage from '../components/ImageCollage'
import Accordian from '../components/Accordian'
import BasicModal from '../components/Modal'

function Tour(){
    return(
        <Container sx={{width: 900}}>
            <Typography variant="h3" component="h1" marginTop={3}>Explore the World in Vegas</Typography>
            <Box marginTop={3} sx={{display: 'flex'}}>
                <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" alt="" height={325}/>
                <ImageCollage/>
            </Box>
            <Box>
                <Typography variant="h6" component="h4" marginTop={3}>About this ticket</Typography>
                <Typography variant="paragraph" component="p" marginTop={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis ultrices orci, ut placerat erat. Ut in neque est. Phasellus molestie aliquam lectus, ac faucibus nunc blandit eget. Quisque dignissim purus magna, in fermentum nibh cursus ut. Integer non euismod.</Typography>
            </Box>
            <Box marginBottom={10}>
                <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>Frequently Asked Questions</Typography>
                <Accordian/>
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation>
                    <BasicModal/>
                </BottomNavigation>
            </Paper>
        </Container>
    )
}

export default Tour