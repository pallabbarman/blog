import { Card, CardContent, CardHeader, Grid, Skeleton } from '@mui/material';

function CardSkeleton() {
    return (
        <>
            {Array.from(new Array(4)).map(() => (
                <Grid item key={Math.random().toString(16).slice(2)}>
                    <Card sx={{ width: 345 }}>
                        <CardHeader
                            avatar={
                                <Skeleton
                                    animation="wave"
                                    variant="circular"
                                    width={40}
                                    height={40}
                                />
                            }
                            action={null}
                            title={
                                <Skeleton
                                    animation="wave"
                                    height={10}
                                    width="80%"
                                    style={{ marginBottom: 6 }}
                                />
                            }
                            subheader={
                                <Skeleton
                                    animation="wave"
                                    height={10}
                                    width="40%"
                                />
                            }
                        />
                        <Skeleton
                            sx={{ height: 190 }}
                            animation="wave"
                            variant="rectangular"
                        />
                        <CardContent>
                            <>
                                <Skeleton
                                    animation="wave"
                                    height={10}
                                    style={{ marginBottom: 5 }}
                                />
                                <Skeleton
                                    animation="wave"
                                    height={10}
                                    style={{ marginBottom: 6 }}
                                />
                                <Skeleton
                                    animation="wave"
                                    height={10}
                                    style={{ marginBottom: 6 }}
                                />
                                <Skeleton
                                    animation="wave"
                                    height={10}
                                    width="80%"
                                />
                            </>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </>
    );
}

export default CardSkeleton;
