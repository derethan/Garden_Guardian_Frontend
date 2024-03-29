import { Box, Typography } from "@mui/material";

const SensorCardInfo = ({ sensor, sensorData, Icon }) => {
  return (
    <>
        <Icon sx={{ fontSize: 80}} />
      <Box>
        <Typography variant="caption" fontWeight="bold">
          Latest Reading
        </Typography>

        <Typography variant="body1">
          {sensorData[sensor]} {sensor === "Humidity Sensor" ? "%" : "°C"}
        </Typography>
      </Box>
    </>
  );
};

export default SensorCardInfo;
