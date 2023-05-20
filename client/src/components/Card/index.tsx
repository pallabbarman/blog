import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Grid,
    Typography,
} from '@mui/material';
import { IBlog } from 'types/blog';

interface BlogCardProps {
    blog: IBlog;
}

function BlogCard({ blog }: BlogCardProps) {
    const { title, description, username, thumbnail, createdAt } = blog;

    return (
        <Grid item>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={<Avatar alt={title} src={thumbnail} />}
                    title={username}
                    subheader={createdAt}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={thumbnail}
                    alt={title}
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
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default BlogCard;
