/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AddPostForm } from "./AddPostForm";

export const AddPostPopup = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 10px 0px;
      `}
    >
      <Button
        variant="contained"
        endIcon={<AddCircleOutlineIcon />}
        onClick={handleClickOpen}
      >
        Add post
      </Button>
      <Dialog
        css={css`
          .MuiDialogContent-root {
            min-width: 480px;
          }
        `}
        open={open}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Add new post</DialogTitle>
        <DialogContent>
          <AddPostForm handleClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
