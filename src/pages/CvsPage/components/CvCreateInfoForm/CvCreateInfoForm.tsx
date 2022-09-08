import React from "react";
import { CvInput } from "@graphql/Cv/Cv.interface";
import { ROUTE } from "@constants/route";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { CvCreateInfoFormProps } from "./CvCreateInfoForm.types";
import { ErrorToast } from "@components/ErrorToast";
import { InfoFormWrapper } from "@components/styled/InfoFormWrapper";
import { Fieldset } from "@components/Fieldset";
import {
  Button,
  Checkbox,
  DialogActions,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { SaveButtonWithAdminAccess } from "@components/FormSaveButton";
import {
  FormContolLabelWrapper,
  FormContolSelectLabelWrapper,
} from "./CvCreateInfoForm.styles";

export const CvCreateInfoForm = ({
  onSubmit,
  error,
  users,
}: CvCreateInfoFormProps) => {
  const navigate = useNavigate();

  const { control, handleSubmit } = useForm<CvInput>({
    defaultValues: {
      name: "",
      description: "",
      userId: "",
      projectsIds: [],
      skills: [],
      languages: [],
      is_template: false,
    },
  });

  const onCancel: React.MouseEventHandler = (e) => {
    navigate(ROUTE.CVS);
  };

  return error ? (
    <ErrorToast message={error} />
  ) : (
    <form style={{ width: "100%" }} onSubmit={handleSubmit(onSubmit)}>
      <InfoFormWrapper>
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Name"
          name="name"
        />
        <Fieldset
          control={control}
          required="Please, specify the field"
          label="Description"
          name="description"
        />
        <FormContolSelectLabelWrapper>
          <Typography sx={{ opacity: "0.7", marginRight: "1em" }}>
            User
          </Typography>
          <Controller
            name="userId"
            control={control}
            render={({ field }) => (
              <Select {...field}>
                {users?.users.map((user) => (
                  <MenuItem key={user.id} value={user.id}>
                    {user?.profile?.full_name || "Unknown"}
                  </MenuItem>
                ))}
              </Select>
            )}
          />
        </FormContolSelectLabelWrapper>
        <FormContolLabelWrapper>
          <Controller
            name="is_template"
            control={control}
            render={({ field }) => (
              <Checkbox
                onChange={(e) => field.onChange(e.target.checked)}
                checked={field.value}
              />
            )}
          />
          <Typography sx={{ opacity: "0.7" }}>Use as a template</Typography>
        </FormContolLabelWrapper>

        {/* TODO: Add skills, projectsIds and languages here */}
      </InfoFormWrapper>
      <DialogActions>
        <SaveButtonWithAdminAccess />
        <Button
          onClick={onCancel}
          type="reset"
          value="Cancel"
          variant="outlined"
          color="info"
        >
          Cancel
        </Button>
      </DialogActions>
    </form>
  );
};
