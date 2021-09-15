import { Heading, Box, Center, CloseButton } from "@chakra-ui/react";
import { MotionBox, transitions } from "shared/components/animation";
import Entrance from "shared/components/Entrance";
import MotionImage from "shared/components/MotionImage";
import { usePortfolio } from "shared/components/PortfolioProvider";

const ProjectPage = ({ history, match }) => {
  const portfolio = usePortfolio();
  const project = portfolio.data.content.projects.find(
    (p) => p.id === match.params.id
  );
  if (!project) {
    return null;
  }
  const media = project.images.items[0];
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 1.25 }}
      animate={{ opacity: 1, scale: 1, transition: transitions.two(0.5) }}
      exit={{ opacity: 0, scale: 0.85, transition: transitions.two(0.5) }}
      pos="fixed"
      inset={0}
      bg="primary.50"
    >
      <Center h="100%" pos="relative">
        <MotionImage
          src={media?.processedUrl || media?.rawUrl}
          h="100%"
          w="100%"
          initialScale={1.1}
          objectFit="cover"
        />
      </Center>
      <Center pos="absolute" inset={0}>
        {/* <Entrance initialY={250} delay={0.35}> */}
        <Box p={4} backgroundColor="secondary.400">
          {/* <Entrance delay={0.6} initialY={100}> */}
          <Heading
            size="4xl"
            color="primary.50"
            textTransform="uppercase"
            textAlign="center"
          >
            {project.name}
          </Heading>
          {/* </Entrance> */}
        </Box>
        {/* </Entrance> */}
      </Center>
      <CloseButton
        onClick={() => {
          history.push({ pathname: "/projects", state: { noScroll: true } });
        }}
        pos="absolute"
        top={4}
        right={4}
        color="primary.900"
      />
    </MotionBox>
  );
};

export default ProjectPage;
