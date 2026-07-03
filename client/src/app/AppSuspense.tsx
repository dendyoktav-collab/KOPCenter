import type { PropsWithChildren } from "react";

import { Suspense } from "react";

import { Box, CircularProgress } from "@mui/material";

export default function AppSuspense({
  children,
}: PropsWithChildren) {
  return (
    <Suspense
      fallback={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <CircularProgress />
        </Box>
      }
    >
      {children}
    </Suspense>
  );
}