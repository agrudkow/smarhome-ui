import React, { FC } from 'react';
import styled from 'styled-components';
import { Accordion, H6 } from '@smarthome/common/ui';
import { useAccordion } from '@smarthome/common/logic';
import AddEntity from './add-entity';
import { useAddEntity } from '@smarthome/screen/logic';
import { EditDatasetFrom, EditDatasetFormProps } from './edit-dataset-form';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EditDatasetAccordionsProps
  extends Omit<EditDatasetFormProps, 'onSaveChanges' | 'onCancelChanges'> {}

enum Accordions {
  AddNewEntity,
  Edit,
}

const StyledEditDatasetAccordions = styled.div`
  margin-bottom: 15px;

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    margin-top: 15px;
  }
`;

export const EditDatasetAccordions: FC<EditDatasetAccordionsProps> = (
  props
) => {
  const {
    fileName,
    handleAddEntity,
    handleDeleteFile,
    handleUploadFile,
  } = useAddEntity();
  const {
    expandedAccordion,
    toggleAccordionFactory,
    closeAccordionFactory,
  } = useAccordion<Accordions>({
    preToggleFunction: handleDeleteFile,
    // defaultOpen: Accordions.Edit,
  });

  return (
    <StyledEditDatasetAccordions>
      <Accordion
        summary={<H6>Add new entity</H6>}
        onChange={toggleAccordionFactory(Accordions.AddNewEntity)}
        expanded={expandedAccordion === Accordions.AddNewEntity}
      >
        <AddEntity
          fileName={fileName}
          onUploadFile={handleUploadFile}
          onAddEntity={handleAddEntity}
        />
      </Accordion>
      <Accordion
        summary={<H6>Edit dataset</H6>}
        onChange={toggleAccordionFactory(Accordions.Edit)}
        expanded={expandedAccordion === Accordions.Edit}
      >
        <EditDatasetFrom
          {...props}
          onCancelChanges={closeAccordionFactory(Accordions.Edit)}
        />
      </Accordion>
    </StyledEditDatasetAccordions>
  );
};

export default EditDatasetAccordions;
