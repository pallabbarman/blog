import { Box, Card, Container, Typography } from '@mui/material';
import notFound from 'assets/images/404-caveman.png';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        const redirectTimer = setTimeout(() => {
            navigate('/');
        }, 5000);

        return () => clearTimeout(redirectTimer);
    }, [navigate]);

    return (
        <Card
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <Container maxWidth="md">
                <Typography
                    align="center"
                    color="textPrimary"
                    sx={{ typography: { sm: 'p', md: 'h2' } }}
                >
                    Oops - the page you&apos;re looking for has gone extinct.
                </Typography>
                <Box
                    sx={{
                        textAlign: 'center',
                        mt: 2,
                    }}
                >
                    <img
                        alt="not found"
                        src={notFound}
                        style={{
                            display: 'inline-block',
                            maxWidth: '100%',
                            width: 560,
                        }}
                    />
                </Box>
            </Container>
        </Card>
    );
}

export default NotFound;
