import React from 'react';
import { Props as ResponsiveImageProps } from 'utils/responsive-image';
import { Link, Typography, Box } from '@material-ui/core';
import LinkAdapter from 'utils/link';

import NavSection from 'layout/nav-section';
import { ContentWrapper, Image, CustomContainer } from './elements';

interface Props {
  img: ResponsiveImageProps;
  title: string;
  description?: string;
  url: string;
  actionText?: string;
  fillMode?: 'contain' | 'cover';
  reversed?: boolean;
}

// const Component: React.FC<Props> = ({ imgs, title, description, url, actionText }) => {
//   return (
//     <NavSection title={title}>
//       <Container>
//         <Header>
//           <Title>{title}</Title>
//         </Header>
//         <Body>
//           <SectionImage images={imgs} />
//           <Box mt="20px" />
//           <Typography color="textSecondary">{description}</Typography>
//           <Box mt="20px" />
//           <Button component={LinkAdapter} href={url} color="primary">
//             {actionText || 'Подробнее'}
//           </Button>
//         </Body>
//       </Container>
//     </NavSection>
//   );
// };

const Component: React.FC<Props> = ({
  img,
  title,
  description,
  url,
  actionText,
  reversed,
  fillMode,
}) => {
  return (
    <NavSection title={title} bgPaper>
      <CustomContainer>
        <Image {...img} fillMode={fillMode} noPlaceHolder={fillMode === 'contain'} />
        <ContentWrapper reversed={reversed}>
          <Typography variant="h4" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography color="textSecondary">{description}</Typography>
          <Box mt="16px" width="100%" />
          <Link component={LinkAdapter} href={url} color="secondary" variant="button">
            {actionText || 'Подробнее'}
          </Link>
        </ContentWrapper>
      </CustomContainer>
    </NavSection>
  );
};

export default Component;
