import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuthStore } from "../datastore/authStore";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { GlobalStyles } from "@mui/material";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    const login = useAuthStore((state) => state.login);

    const handleLogin = () => {
        setError(null);
        try {
            console.log("Logging in...");
            login(email, password);
            setTimeout(() => {
                console.log(useAuthStore.getState());
            }, 5000);
        } catch {
            setError("Invalid email or password");
        }
    };

    return (
        <>
            {/* Global Styles */}
            <GlobalStyles
                styles={{
                    body: { margin: 0, padding: 0 },
                    html: { margin: 0, padding: 0 },
                }}
            />
            {/* Main Container */}
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                    background: "",
                    padding: 2,
                    margin: 0,
                }}
            >
                {/* Login Card */}
                <Paper
                    elevation={6}
                    sx={{
                        width: "100%",
                        maxWidth: 400,
                        padding: 4,
                        borderRadius: "16px",
                        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
                        backgroundColor: "white",
                    }}
                >
                    {/* Title */}
                    <Typography
                        variant="h4"
                        sx={{
                            textAlign: "center",
                            marginBottom: 3,
                            fontWeight: "bold",
                            color: "#3A5A85", // Dark blue
                        }}
                    >
                        NISER SDG SERVER
                    </Typography>
                    {/* Subtitle */}
                    <Typography
                        variant="body1"
                        sx={{
                            textAlign: "center",
                            marginBottom: 4,
                            color: "#666", // Light gray
                        }}
                    >
                        Please log in to continue
                    </Typography>

                    {/* Email Input */}
                    <TextField
                        fullWidth
                        label="Email"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            marginBottom: 2,
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                "& fieldset": {
                                    borderColor: "#E0E5EC",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#3A5A85", // Blue on hover
                                },
                            },
                        }}
                    />
                    {/* Password Input */}
                    <TextField
                        fullWidth
                        label="Password"
                        type="password"
                        variant="outlined"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            marginBottom: 2,
                            "& .MuiOutlinedInput-root": {
                                borderRadius: "8px",
                                "& fieldset": {
                                    borderColor: "#E0E5EC",
                                },
                                "&:hover fieldset": {
                                    borderColor: "#3A5A85",
                                },
                            },
                        }}
                    />
                    {/* Error Message */}
                    {error && (
                        <Typography
                            variant="body2"
                            sx={{
                                marginBottom: 2,
                                textAlign: "center",
                                color: "#FF5722", // Accent color
                            }}
                        >
                            {error}
                        </Typography>
                    )}
                    {/* Login Button */}
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleLogin}
                        sx={{
                            fontSize: "16px",
                            padding: "10px",
                            textTransform: "none",
                            borderRadius: "8px",
                            backgroundColor: "#3A5A85",
                            "&:hover": {
                                backgroundColor: "#2F4B6F",
                            },
                            color: "#fff",
                            boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        Login
                    </Button>
                </Paper>
            </Box>
        </>
    );
};

export default LoginPage;
