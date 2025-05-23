// src/app/(home)/page.tsx
import { Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';

// Dynamically import components for better performance
const Hero = dynamic(() => import('../components/Hero/Hero'), {
  loading: () => (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh"
    >
      <CircularProgress sx={{ color: 'secondary.main' }} />
    </Box>
  ),
});

// const About = dynamic(() => import('../components/About/About'), {
//   loading: () => (
//     <Box 
//       display="flex" 
//       justifyContent="center" 
//       alignItems="center" 
//       minHeight="60vh"
//     >
//       <CircularProgress sx={{ color: 'secondary.main' }} />
//     </Box>
//   ),
// });

// const ProjectsExperience = dynamic(() => import('../components/ProjectsExperience/TabsSection'), {
//   loading: () => (
//     <Box 
//       display="flex" 
//       justifyContent="center" 
//       alignItems="center" 
//       minHeight="60vh"
//     >
//       <CircularProgress sx={{ color: 'secondary.main' }} />
//     </Box>
//   ),
// });

// const Education = dynamic(() => import('../components/Education/Education'), {
//   loading: () => (
//     <Box 
//       display="flex" 
//       justifyContent="center" 
//       alignItems="center" 
//       minHeight="60vh"
//     >
//       <CircularProgress sx={{ color: 'secondary.main' }} />
//     </Box>
//   ),
// });

export default function HomePage() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <Box
        component="div"
        id="main-content"
        sx={{
          width: '100%',
          minHeight: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        {/* Hero Section */}
        <Suspense fallback={
          <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            minHeight="100vh"
          >
            <CircularProgress sx={{ color: 'secondary.main' }} />
          </Box>
        }>
          <Hero />
        </Suspense>

        {/* About Section */}
        <Suspense fallback={
          <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            minHeight="60vh"
          >
            <CircularProgress sx={{ color: 'secondary.main' }} />
          </Box>
        }>
          {/*<About />*/}
        </Suspense>

        {/* Projects & Experience Section */}
        <Suspense fallback={
          <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            minHeight="60vh"
          >
            <CircularProgress sx={{ color: 'secondary.main' }} />
          </Box>
        }>
          {/*<ProjectsExperience />*/}
        </Suspense>

        {/* Education Section */}
        <Suspense fallback={
          <Box 
            display="flex" 
            justifyContent="center" 
            alignItems="center" 
            minHeight="60vh"
          >
            <CircularProgress sx={{ color: 'secondary.main' }} />
          </Box>
        }>
          {/*<Education /> */}
        </Suspense>
      </Box>
    </>
  );
}