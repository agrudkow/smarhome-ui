import React, { FC, useCallback } from 'react';
import styled from 'styled-components';
import {
  InfoHeader,
  OvalBoxContainer,
  H6,
  Rating,
  BaseButton,
  OutlinedButton,
} from '@smarthome/common/ui';
import { AlgorithmDetailsDTO } from '@smarthome/data';
import { useHistory } from 'react-router';
import { Routes } from '@smarthome/common/service';

const data: AlgorithmDetailsDTO = {
  algorithmId: '123',
  displayName: 'Test algorithm name',
  algorithmSummary: 'test test',
  algorithmDescription:
    'This view allows you to search through avaliable algortihms provided by suppliers. You can dispaly all algorithms by leaving search input empty or you can fill it up and search algorithms by key words (provided text will be treated as separate tags by which algorithms will be searched). Additionaly you can sort result by name and rating. ',
  algorithmRating: 4.8,
  linkURL: 'testlink',
};

const DescriptionContainer = styled(H6)`
  padding: 0;
  margin: 15px 0;

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    margin: 5px 0;
  }
`;

const StyledDetailedAlgorithm = styled.div`
  min-height: ${({
    theme: {
      layout: { headerHeight },
    },
  }) =>
    `calc(100vh - ${
      headerHeight + 40
    }px)`}; //40 -> padding from libs/common/ui/src/lib/main-container.tsx
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${({
    theme: {
      breakpoints: { tabletDF },
    },
  }) => tabletDF} {
    min-height: ${({
      theme: {
        layout: { headerHeight },
      },
    }) =>
      `calc(100vh - ${
        headerHeight + 20
      }px)`}; // 20 -> padding from libs/common/ui/src/lib/main-container.tsx
  }

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    min-height: ${({
      theme: {
        layout: { headerHeight },
      },
    }) =>
      `calc(100vh - ${
        headerHeight + 10
      }px)`}; //10 -> padding from libs/common/ui/src/lib/main-container.tsx
  }
`;

const UnderlinedContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid
    ${({
      theme: {
        palette: { primary },
      },
    }) => primary};

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const OptionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const OptionButtonContainer = styled.div<{ margin: 'left' | 'right' }>`
  width: calc(50% - 2px);
  margin: ${({ margin }) => (margin === 'left' ? '0 0 0 2px' : '0 2px 0 0')};

  ${({
    theme: {
      breakpoints: { mobileDF },
    },
  }) => mobileDF} {
    width: 100%;
    margin: 2px 0;
  }
`;

export const DetailedAlgorithm: FC = () => {
  const history = useHistory();
  const { displayName, algorithmRating, algorithmDescription } = data;

  const handleBackClick = useCallback(() => {
    history.push(`/${Routes.Algorithms}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRunOnDatasetClick = useCallback(() => {
    history.push(`/${Routes.Datasets}?select=true`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <StyledDetailedAlgorithm>
      <div>
        <InfoHeader
          headerText={displayName}
          infoMessageText={
            'This view allows you to search through avaliable algortihms provided by suppliers. You can dispaly all algorithms by leaving search input empty or you can fill it up and search algorithms by key words (provided text will be treated as separate tags by which algorithms will be searched). Additionaly you can sort result by name and rating. '
          }
        />
        <UnderlinedContainer>
          <H6>Author:&nbsp;&nbsp;Jan Kowalski</H6>
          <RatingContainer>
            <H6>Rating:&nbsp;&nbsp;</H6>
            <Rating value={algorithmRating} readOnly={true} />
          </RatingContainer>
        </UnderlinedContainer>
        <OvalBoxContainer>
          <DescriptionContainer>{algorithmDescription}</DescriptionContainer>
        </OvalBoxContainer>
        <OptionButtons>
          <OptionButtonContainer margin="right">
            <OutlinedButton
              onClick={handleRunOnDatasetClick}
              style={{ width: '100%' }}
            >
              Run on dataset
            </OutlinedButton>
          </OptionButtonContainer>
          <OptionButtonContainer margin="left">
            <OutlinedButton
              onClick={() => console.log('Click1!!!!')}
              style={{ width: '100%' }}
            >
              Rate algorithm
            </OutlinedButton>
          </OptionButtonContainer>
        </OptionButtons>
      </div>
      <div>
        <BaseButton onClick={handleBackClick}>Back</BaseButton>
      </div>
    </StyledDetailedAlgorithm>
  );
};

export default DetailedAlgorithm;
