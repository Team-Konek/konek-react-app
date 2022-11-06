import React from "react";
import Box from "@mui/material/Box";
import MicIcon from "@mui/icons-material/Mic";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import CallEndIcon from "@mui/icons-material/CallEnd";
import { Grid, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import MicOffIcon from "@mui/icons-material/MicOff";
import VideocamOffOutlinedIcon from "@mui/icons-material/VideocamOffOutlined";
import { useTheme } from "@mui/material/styles";

export default function RoomActions({
  audioEnabled,
  onAudioToggle,
  onEnd,
  videoEnabled,
  onVideoToggle,
}) {
  const theme = useTheme();

  const handleMuteToggle = () => {
    onAudioToggle?.(!audioEnabled);
  };

  const handleEnd = () => {
    onEnd?.();
  };

  const handleVideo = () => {
    onVideoToggle?.(!videoEnabled);
  };

  return (
    <Grid sx={{ display: "flex", flexDirection: "column", flexGrow: 2 }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          borderRadius: "5px",
          marginTop: 2,
        }}
      >
        <Box px={2}>
          <IconButton
            onClick={handleMuteToggle}
            size="large"
            sx={{ color: theme.palette.white.main }}
          >
            {audioEnabled ? <MicIcon /> : <MicOffIcon />}
          </IconButton>
        </Box>
        <Box px={2}>
          <IconButton
            onClick={handleVideo}
            size="large"
            sx={{ color: theme.palette.white.main }}
          >
            {videoEnabled ? (
              <VideocamOutlinedIcon />
            ) : (
              <VideocamOffOutlinedIcon />
            )}
          </IconButton>
        </Box>
        <Box px={2}>
          <IconButton
            onClick={handleEnd}
            size="small"
            sx={{ color: theme.palette.white.main, backgroundColor: "red" }}
          >
            <CallEndIcon />
          </IconButton>
        </Box>
      </Box>
    </Grid>
  );
}

RoomActions.defaultProps = {
  audioEnabled: false,
  videoEnabled: false,
  onAudioToggle: () => {},
  onEnd: () => {},
  onVideoToggle: () => {},
};
// Typechecking props of the MDAlert
RoomActions.propTypes = {
  audioEnabled: PropTypes.bool,
  videoEnabled: PropTypes.bool,
  onAudioToggle: PropTypes.func,
  onEnd: PropTypes.func,
  onVideoToggle: PropTypes.func,
};
