import React from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
<<<<<<< Updated upstream
import { Card, CardContent, Typography, Grid, Box, AppBar, Toolbar } from "@mui/material";
=======
import { Card, CardContent, Typography, Box, CssBaseline } from "@mui/material";
import LoginPage from "./components/LoginPage";

const themeColors = {
  yellow: "#F7941D",
  yellowTr: "#FABD73",
  dark: "#414a4d",
  text: "#89807A",
  backgroundDark: "#080618",
  textDark: "#ccc",
};
>>>>>>> Stashed changes


const Home: React.FC = () => {
  const navigate = useNavigate();

  const cards = [
    { title: "Archive", path: "/archive" },
    { title: "Lost and Found", path: "/lnf" },
    { title: "Listings", path: "/listings" },
    { title: "Canteen Menu", path: "https://www.niser.ac.in/hostels/canteenmenu/", external: true },
    { title: "Event Management Web", path: "https://sdgniser.github.io/event-management/", external: true },
  ];

  const handleCardClick = (path: string, external?: boolean) => {
    if (external) {
      window.open(path, "_blank");
    } else {
      navigate(path);
    }
  };

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{
          textAlign:"center"
        }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NISER SDG Projects
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ flexGrow: 1, padding: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.path}>
              <Card
                sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s, background-color 0.3s",
                  backgroundColor: "#f5f5f5",
                  '&:hover': { transform: "scale(1.05)", backgroundColor: "#d1c4e9" },
                }}
                onClick={() => handleCardClick(card.path, card.external)}
              >
                <CardContent>
                  <Typography variant="h5" component="div" gutterBottom>
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.external ? `Visit the ${card.title.toLowerCase()}.` : `Go to ${card.title.toLowerCase()} page.`}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

const Archive: React.FC = () => <Typography variant="h4">Archive Page</Typography>;
const LostAndFound: React.FC = () => <Typography variant="h4">Lost and Found Page</Typography>;
const Listings: React.FC = () => <Typography variant="h4">Listings Page</Typography>;

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/lnf" element={<LostAndFound />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/user_login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
