import './app.scss'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import logo from './image/logo.png';
import item3 from './image/3.png';
import item2 from './image/2.png';
import { Grid } from '@mui/material';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useState } from 'react';
const constants = {
  colors: {
    black: "#0e0e0e",
    white: "#fcfcfc",
    orange: "#ff8901",
    gray: "#363636"
  },
  mode: ["COLD", "PISTOL", "MACHINE", "RIFLES", "HEAVEY", "AMMO THINGS", "ATTACHMENTS"],
  category: ["DAMAGE", "RANGE", "FIRE RATE", "ACCURACY", "CONTROL"]

}
function App() {
  const [mode, setMode] = useState(constants.mode[0])

  return (
    <>
      <Grid container className='navbar'>
        <Box sx={{ bgcolor: constants.colors.black, height: '100%', width: "90%" }} >
          <Grid container sx={{ display: 'flex', alignItems: "center", height: '100%' }}>
            <Grid item xs={8} sx={{ display: 'flex', alignItems: "center", justifyContent: "flex-start", gap: "25px" }}>
              <Box component='img' alt='logo' src={logo} sx={{ mr: 5, width: "80px", objectFit: "cover" }} />
              {constants.mode.map(item => {
                return (
                  <Box key={item} className={`menu ${mode === item ? "open" : ""}`} onClick={() => setMode(item)} >
                    <h5>{item}</h5>
                  </Box>)
              })}

            </Grid>
            <Grid item xs={4} sx={{ display: 'flex', alignItems: "center", justifyContent: "flex-end", gap: '25px', borderLeft: `1px solid ${constants.colors.gray}`, height: '100%', pr: 5 }}>
              <Box className="item">
                <Box className="icon">
                  <AttachMoneyOutlinedIcon style={{ fontSize: '70%' }} />
                </Box>
                <Box className="text">
                  <h5>CASH</h5>
                  <h5>100,000,000$</h5>
                </Box>
              </Box>
              <Box className="item">
                <Box className="icon">
                  <CreditCardOutlinedIcon style={{ fontSize: '70%' }} />
                </Box>
                <Box className="text">
                  <h5>CREDIT CARD</h5>
                  <h5>100,000,000$</h5>
                </Box>
              </Box>

            </Grid>
          </Grid>
        </Box>
      </Grid>

      <Container maxWidth={false} disableGutters sx={{ bgcolor: constants.colors.black }} className='container'>
        <Box sx={{ height: '75vh', width: "90%", display: "flex" }} >
          <Box className="info" sx={{ position: 'relative' }}>
            <h1> MI34 MINIGUN</h1>
            <h3>7.62x51MM NATO</h3>
            <Box sx={{ width: "100%", display: "flex" }}>
              <Box sx={{ width: "50%", height: "60px", overflowY: "auto", my: 2 }}>
                <p>
                  Using fontSize I cannot increase its size.Using fontSize I cannot increase its size.
                  Using

                </p>
              </Box>
              <Box sx={{ width: "50%", my: 2 }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "start", width: "100%", height: "100%", gap: "5px", pl: 5, pb: 2 }}>
                  <Box className='icon-skill'>
                    <LockOutlinedIcon />
                  </Box>
                  <Box className='icon-skill'>
                    <LockOutlinedIcon />
                  </Box>
                  <Box className='icon-skill'>
                    <LockOutlinedIcon />
                  </Box>
                  <Box className='icon-skill'>
                    <LockOutlinedIcon />
                  </Box>
                  <Box className='icon-skill'>
                    <LockOutlinedIcon />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="card" >
              <Box component="img" src={item2} className='image' />
            </Box>
            <Box className="category-container" sx={{ position: 'absolute', bottom: '5%' }}>
              {constants.category.map(item => {
                return (
                  <Box className="category-item" key={item}>
                    <h4>{item}</h4>
                    <div className='scale fill'></div>
                    <div className='scale fill'></div>
                    <div className='scale'></div>
                    <div className='scale'></div>
                    <div className='scale'></div>
                  </Box>)
              })}

            </Box>

          </Box>
          <Box className="tab-menu">
            <Box className="container">
              <Box className="list-detail">
                <Box className="detail-item"><h5>GUILD</h5></Box>
                <Box className="detail-item"><h5>GUILD</h5></Box>
                <Box className="detail-item"><h5>GUILD</h5></Box>
                <Box className="detail-item"><h5>GUILD</h5></Box>
              </Box>
              <Box className="list-menu">
                <Box className="item"><h5>TOTAL 50,000$</h5></Box>
                <Box className="item" sx={{ gap: "10px" }}>
                  <h5>ADD TO CART</h5>
                  <Box sx={{ mt: "5px " }}>
                    <ShoppingCartIcon style={{ fontSize: '100%', }} />
                  </Box>
                </Box>
                <Box className="item">
                  <Box className="icon select"> <AttachMoneyOutlinedIcon style={{ fontSize: '120%' }} /></Box>
                  <Box className="icon"> <CreditCardOutlinedIcon style={{ fontSize: '120%' }} /></Box>
                </Box>
                <Box className="item"><h5>BUY</h5></Box>
              </Box>
            </Box>

          </Box>
        </Box>
      </Container>
      <Grid container className='footer'>
        <Box sx={{ bgcolor: constants.colors.black, height: '100%', width: "90%" }} >
          <Grid container spacing={2} sx={{ display: 'flex', alignItems: "center", height: '100%', justifyContent: "center", textAlign: "center" }}>
            <Grid item xs={2}>
              <div className="item">
                <Box sx={{ position: 'absolute', top: 0 }}>
                  <p >
                    77.62x51mm
                  </p>
                </Box>
              </div>
            </Grid>
            <Grid item xs={2}>
              <Box className="item">123</Box>
            </Grid>
            <Grid item xs={2}>
              123
            </Grid>
            <Grid item xs={2}>
              123
            </Grid>
            <Grid item xs={2}>
              123
            </Grid>
            <Grid item xs={2}>
              123
            </Grid>

          </Grid>
        </Box>
      </Grid>

    </>
  );
}

export default App;
