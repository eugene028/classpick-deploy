'use client'
import StyledComponentsRegistry from '@lib/registry';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { theme } from '@hc/ui';
import { GlobalStyle } from 'src/styles/GlobalStyle';
import MainLayout from '@components/shared/MainLayout';
import { NavLayout } from '@components/shared/NavLayout';
import ContentLayout from '@components/shared/ContentLayout';

export default function RootLayout({ children }: { children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="ko">
      <head>
        {/* <NavLayout/> */}
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
              <GlobalStyle/>
                <StyledComponentsRegistry>
                  <MainLayout>
                    <NavLayout/>
                      <ContentLayout>
                        {children}
                      </ContentLayout>
                  </MainLayout>
                </StyledComponentsRegistry>
            </QueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}