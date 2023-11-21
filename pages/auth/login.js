import React from "react";
import makeStyles from '@mui/styles/makeStyles';
import { fireAuth } from "./../../services/firebase";
import { useRouter } from 'next/router';
import { Box, TextField, Grid, Stack } from "@mui/material";
import { Button, Typography } from '@mui/material';
import Link from "@mui/material/Link";
import Image from "next/image";
import { Paper } from '@mui/material';


export default function Signin({
    logo,
    title
}) {
    const classes = useStyles();
    const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState("");
    const handleUserSignIn = (e) => {
        e.preventDefault();
        const form = e.target.elements;
        setError("");
        setLoading(true);
        fireAuth
            .signInWithEmailAndPassword(form.email.value, form.password.value)
            .then((res) => {
                router.push('/home')
                console.log(res);
                console.log("Successfully!");
                setLoading(false);
                e.target.elements.email.value = "";
                e.target.elements.password.value = "";
            })
            .catch((err) => {
                console.log(err);
                console.log("UnSuccessfully!");
                setError(err.message);
                setLoading(false);
            });
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>
            {/*  background image */}
            <Grid item xs={false} sm={4} md={7}>
                <Box className={classes.backgroundImage} />
            </Grid>

            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <Box sx={{ my: 5, mx: 4, }} className={classes.container}>
                    <img  src="/hot-drink 1.png" width={100} height={100} alt="logo" /><br/><br/>
                    {/* form login */}
                    <form className={classes.form} onSubmit={handleUserSignIn}>
                        <Stack spacing={2}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    label="Email"
                                    name="email"
                                    type="email"
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField
                                    size="small"
                                    variant="outlined"
                                    fullWidth
                                    required
                                    label="Password"
                                    name="password"
                                    type="password"
                                />
                            </Grid>

                            <Grid item xs={12} sm={12} md={12} lg={12}>
                                <Button
                                    className={classes.signin}
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                >
                                    {
                                        loading ? 'Loading ...' : 'Login'
                                    }
                                </Button>

                            </Grid>
                            <Typography color="error" variant="body2" gutterBottom>{error}</Typography>
                            <Stack direction={"row"} justifyContent="space-between">
                                <Typography>
                                    <Link className={classes.link} href="/auth/recoverypassword">
                                        Forgot password ?
                                    </Link>
                                </Typography>
                                <Typography>
                                    <Link className={classes.link} href="/auth/register">
                                        Don&apos;t have account? sign up
                                    </Link>
                                </Typography>
                            </Stack>
                        </Stack>

                    </form>
                </Box>
            </Grid>
        </Grid>
    );
};

const useStyles = makeStyles(({

    backgroundImage: {
        width: '100%',
        height: '100vh',
        backgroundImage: "url(https://www.wallpapertip.com/wmimgs/152-1526785_coffee-shop-background.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        // marginTop: 1,
    },
    signin: {
        backgroundColor: ' #55ACEE',
        color: '#FFF',
        textTransform: 'none',
        border: '1px solid #55ACEE',
        boxSizing: 'border-box',
        "&:hover": {
            backgroundColor: ' #55ACEE',
            border: '1px solid #55ACEE',
        },
    },
    link: {
        textDecoration: 'none',
        color: ' #55ACEE',
    },
}));
