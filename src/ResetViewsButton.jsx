import React, { Fragment, useState } from "react";
import {
  Button,
  Confirm,
  useUpdateMany,
  useRefresh,
  useNotify,
  useUnselectAll,
} from "react-admin";
import { VisibilityOff } from "@material-ui/icons";

const ResetViewsButton = ({ selectedIds }) => {
  const [open, setOpen] = useState(false);
  const refresh = useRefresh();
  const notify = useNotify();
  const unselectAll = useUnselectAll();
  const [updateMany, { loading }] = useUpdateMany(
    "solutions",
    selectedIds,
    { views: 0 },
    {
      onSuccess: () => {
        refresh();
        notify("Solutions updated");
        unselectAll("solutions");
      },
      onFailure: (error) => notify("Error: solutions not updated", "warning"),
    }
  );
  const handleClick = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleConfirm = () => {
    updateMany();
    setOpen(false);
  };

  return (
    <Fragment>
      <Button label="Reset Views" onClick={handleClick}>
        <VisibilityOff />
      </Button>
      <Confirm
        isOpen={open}
        loading={loading}
        title="Update View Count"
        content="Are you sure you want to reset the views for these items?"
        onConfirm={handleConfirm}
        onClose={handleDialogClose}
      />
    </Fragment>
  );
};

export default ResetViewsButton;
