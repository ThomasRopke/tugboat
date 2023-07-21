import DeleteIcon from '@mui/icons-material/Delete'
import { Box, Button, Card, IconButton } from '@mui/material'
import { defaultHyperlinkAction } from 'common/constants'
import { setContextMenus } from 'common/contextMenus'
import { loadHyperlinkConfig, saveHyperlinkConfig } from 'common/storage'
import { HyperlinkConfig } from 'common/types'
import FormTextField from 'components/form/FormTextField'
import React from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

const Actions = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { isLoading },
  } = useForm({ defaultValues: loadHyperlinkConfig })
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'actions',
  })

  const onSubmit = async (config: HyperlinkConfig) => {
    await saveHyperlinkConfig(config)
    reset(config)
    setContextMenus(config)
  }

  return (
    <React.Fragment>
      {!isLoading && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {fields.map((config, index) => (
            <Card key={config.id} sx={{ marginBottom: 1, padding: 1 }}>
              <IconButton sx={{ float: 'right' }} onClick={() => remove(index)}>
                <DeleteIcon />
              </IconButton>
              <FormTextField label="Name" name={`actions.${index}.name`} control={control} />
              <FormTextField label="Regex" name={`actions.${index}.regex`} control={control} />
            </Card>
          ))}
          <Box display="flex" gap={1}>
            <Button variant="outlined" onClick={() => append(defaultHyperlinkAction)}>
              Add
            </Button>
            <Button variant="outlined" onClick={() => reset()}>
              Reset
            </Button>
            <Button variant="outlined" type="submit">
              Save
            </Button>
          </Box>
        </form>
      )}
    </React.Fragment>
  )
}

export default Actions
