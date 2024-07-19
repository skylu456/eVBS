import React from 'react';
import { Box, Typography, Container, Paper, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { userProfileData } from '../mockData';

const UserProfile = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  const { personalData, bankInfo, otherInfo } = userProfileData;

  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h4" gutterBottom>
          ¡Bienvenido a tu perfil!
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Cerrar
        </Button>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Datos Personales</Typography>
          <Typography>Nombre: {personalData.name}</Typography>
          <Typography>Email: {personalData.email}</Typography>
          <Typography>Telefono: {personalData.phone}</Typography>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Información de Banca Registrada</Typography>
          <Typography>Banco: {bankInfo.bank}</Typography>
          <Typography>Número de Cuenta: {bankInfo.accountNumber}</Typography>
          <Typography>IBAN: {bankInfo.iban}</Typography>
        </Paper>
        <Paper sx={{ padding: 2 }}>
          <Typography variant="h6">Otra Información</Typography>
          <Typography>Dirección: {otherInfo.address}</Typography>
          <Typography>Membresía: {otherInfo.membership}</Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default UserProfile;
