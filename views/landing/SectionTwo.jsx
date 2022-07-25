import { SimpleGrid, VStack, Box } from '@chakra-ui/react';
import Image from 'next/image';

import {
  StyledPrimaryButton,
  StyledPrimaryHeading,
  StyledBodyText
} from '../../themes/styled';

import outsider from '../../public/assets/illustrations/ilzom_outsidelands_nohole.png';

export const SectionTwo = () => {
  return (
    <SimpleGrid
      id='manifesto'
      columns={{ base: 1, md: 1, lg: 2 }}
      px={{ base: '2rem', lg: '8rem' }}
      my='4rem'
      mb='0'
      bg='background_brown'
      placeItems='center'
    >
      <Box width={{ base: '500px', lg: '500px' }}>
        <Image src={outsider} alt='raid fantasy' placeholder='blur' />
      </Box>
      <VStack spacing={5} justifyContent='center' ml={{ md: '1rem' }}>
        <StyledPrimaryHeading fontSize={{ base: '1.5rem', lg: '36px' }}>
          Manifesto
        </StyledPrimaryHeading>
        <div>
          <StyledBodyText fontSize={{ base: '1rem', lg: '18px' }}>
            우리 Handbook 링크랑 대충 여기 어떤 DAO인지 한 줄 소개?.
          </StyledBodyText>
          <br></br>
        </div>
        <br />
        <StyledPrimaryButton
          fontSize={{ base: '16px', lg: '18px' }}
          onClick={() =>
            window.open('https://moonwakee.github.io/ilzom-DAO/', '_blank')
          }
        >
          Handbook
        </StyledPrimaryButton>
      </VStack>
    </SimpleGrid>
  );
};
