import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material';

function BlogCard(props: any) {
    const { blog } = props;
    const {
        strTeam,
        strTeamBadge,
        strStadium,
        strStadiumThumb,
        strStadiumDescription,
    } = blog;
    return (
        <Grid item>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={<Avatar alt={strTeam} src={strTeamBadge} />}
                    title={strTeam}
                    subheader={strStadium}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={strStadiumThumb}
                    alt={strTeam}
                />
                <CardContent>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            WebkitLineClamp: '4',
                            WebkitBoxOrient: 'vertical',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                        }}
                    >
                        {strStadiumDescription}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default BlogCard;
