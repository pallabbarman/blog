import MoreVertIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { BlogTypes } from '../../types/blogsTypes';

interface BlogsCardProps {
    blog: BlogTypes;
}

function BlogsCard(props: BlogsCardProps) {
    const { blog } = props;
    const {
        strTeam,
        strStadium,
        strStadiumDescription,
        strStadiumThumb,
        strTeamBadge,
    } = blog;

    return (
        <Grid item>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={<Avatar alt={strTeam} src={strTeamBadge} />}
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
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

export default BlogsCard;
