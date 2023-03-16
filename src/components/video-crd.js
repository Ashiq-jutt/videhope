import React, { useState } from 'react';
import { Card, CardHeader, CardMedia, CardActions, Button } from '@material-ui/core';
import { PlayArrow, Pause, Report, Block } from '@material-ui/icons';

function UserCard({ name, videoUrl }) {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    const handleReport = () => {
        // TODO: Implement report functionality
    };

    const handleBlock = () => {
        // TODO: Implement block functionality
    };

    return (
        <Card style={{ background: 'linear-gradient(to bottom right, #2196f3, #e91e63)' }}>
            <CardHeader title={name} />
            <CardMedia component="video" src={videoUrl} autoPlay={isPlaying} controls={false} />
            <CardActions>
                {isPlaying ? (
                    <Button color="primary" onClick={handlePause} startIcon={<Pause />}>
                        Pause
                    </Button>
                ) : (
                    <Button color="primary" onClick={handlePlay} startIcon={<PlayArrow />}>
                        Play
                    </Button>
                )}
                <Button onClick={handleReport} startIcon={<Report />}>
                    Report
                </Button>
                <Button onClick={handleBlock} startIcon={<Block />}>
                    Block Account
                </Button>
            </CardActions>
        </Card>
    );
}

export default UserCard;
