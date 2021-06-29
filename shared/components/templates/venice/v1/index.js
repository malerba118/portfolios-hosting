import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const App = dynamic(() => import("./App"), { ssr: false });

// const Template = ({ portfolio }) => {
//   const { about, projects } = portfolio.content;
//   return (
//     <Box p={6}>
//       <Stack align="center">
//         <Heading size="2xl">
//           {about.firstName} {about.lastName}
//         </Heading>
//         <Heading size="md">{about.title}</Heading>
//       </Stack>
//       <Divider my={4} />
//       <Heading size="lg" mb={4}>
//         Projects
//       </Heading>
//       <Stack spacing={3}>
//         {projects.map((project) => (
//           <Box>
//             <Heading size="sm">{project.name}</Heading>
//             <Heading color="gray.700" fontSize="xs">
//               {project.summary}
//             </Heading>
//             <Text fontSize="xs">{project.description}</Text>
//           </Box>
//         ))}
//       </Stack>
//     </Box>
//   );
// };

const Template = ({ portfolio }) => {
  return (
    <ChakraProvider>
      <App portfolio={portfolio} />
    </ChakraProvider>
  );
};

export default Template;
