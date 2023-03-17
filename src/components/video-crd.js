
// import React, { useState } from 'react';
// import { Card, CardHeader, CardMedia, CardActions, Button, Grid, useMediaQuery, useTheme } from '@material-ui/core';
// import { PlayArrow, Pause, Report, Block } from '@material-ui/icons';

// function UserCard({ name }) {
//     const videoUrl = { uri: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4' }; // sample videoUrl object for testing purposes
//     const [isPlaying, setIsPlaying] = useState(false);
//     const theme = useTheme();
//     const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));


//     const handleReport = () => {
//         // TODO: Implement report functionality
//     };

//     const handleBlock = () => {
//         // TODO: Implement block functionality
//     };

//     const videoCards = [];

//     if (isSmallScreen) {
//         // Render 3 video cards on small screens
//         for (let i = 0; i < 3; i++) {
//             videoCards.push(
//                 <Grid item xs={12} sm={4} key={i}>
//                     <Card>
//                         <CardHeader title={name} />
//                         <CardMedia component="video" src={videoUrl?.uri || 'https://www.youtube.com/watch?v=_5P9ib42tnY'} controls={true} />
//                         <CardActions>
//                             <Button style={{ textTransform: 'capitalize' }} onClick={handleReport} startIcon={<Report />}>
//                                 Report
//                             </Button>
//                             <Button style={{ textTransform: 'capitalize' }} onClick={handleBlock} startIcon={<Block />}>
//                                 Block Account
//                             </Button>
//                         </CardActions>
//                     </Card>
//                 </Grid>
//             );
//         }
//     } else {
//         // Render 4 video cards on larger screens
//         for (let i = 0; i < 4; i++) {
//             videoCards.push(
//                 <Grid item xs={12} sm={3} key={i}>
//                     <Card>
//                         <CardHeader title={name} />
//                         <CardMedia component="video" src={videoUrl?.uri || 'https://www.youtube.com/watch?v=_5P9ib42tnY'} controls={true} />
//                         <CardActions>
//                             <Button onClick={handleReport} startIcon={<Report />}>
//                                 Report
//                             </Button>
//                             <Button onClick={handleBlock} startIcon={<Block />}>
//                                 Block Account
//                             </Button>
//                         </CardActions>
//                     </Card>
//                 </Grid>
//             );
//         }
//     }

//     return (
//         <Grid container spacing={2}>
//             {videoCards}
//         </Grid>
//     );
// }

// export default UserCard;
import React, { useState } from 'react';
import { Card, CardHeader, CardMedia, CardActions, Button, Grid, useMediaQuery, useTheme } from '@material-ui/core';
import { PlayArrow, Pause, Report, Block } from '@material-ui/icons';

function UserCard({ name, videoUrl }) {
    // const videoUrl = { uri: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4' }; // sample videoUrl object for testing purposes
    const [isPlaying, setIsPlaying] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleReport = () => {
        // TODO: Implement report functionality
    };

    const handleBlock = () => {
        // TODO: Implement block functionality
    };

    const videoCards = isSmallScreen
        ? [0, 1, 2]
        : [0, 1, 2, 3];

    return (
        <Grid container spacing={2}>
            {videoCards.map((index) => (
                <Grid item xs={12} sm={isSmallScreen ? 4 : 3} key={index}>
                    <Card>
                        <CardHeader title={name} />
                        <CardMedia component="video" src={videoUrl?.uri} controls={true} />
                        <CardActions>
                            <Button style={{ textTransform: 'capitalize', fontSize: isSmallScreen ? 10 : 16 }} onClick={handleReport} startIcon={<Report />}>
                                Report
                            </Button>
                            <Button style={{ textTransform: 'capitalize', fontSize: isSmallScreen ? 10 : 16 }} onClick={handleBlock} startIcon={<Block />}>
                                Block Account
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
}

export default UserCard;
