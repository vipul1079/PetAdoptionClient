import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideSnackbar } from "../redux/actions/snackbar";

const SnackbarComponent = () => {
  const dispatch = useDispatch();
  const { open, message, type } = useSelector((state) => state.snackbar);

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={() => hideSnackbar({ dispatch })}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Alert
        onClose={() => hideSnackbar({ dispatch })}
        severity={type}
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarComponent;
