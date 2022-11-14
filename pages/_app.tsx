import type { AppProps } from 'next/app';
import { Suspense } from 'react';

import { CircularProgress, Container, ThemeProvider } from '@mui/material';
import { MainAppHeaderComponent } from '../src/shared/ui/components/header';
import { Color } from '../src/shared/infrastructure/enums';
import { appTheme } from '../src/shared/ui/styles/appTheme';

export default function Root({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={appTheme}>
            <MainAppHeaderComponent favico={process.env.FAVICO} />
            <Container>
                <Suspense fallback={<CircularProgress variant={'indeterminate'} color={Color.primary} />}>
                    <Container maxWidth="lg">
                        <Component {...pageProps} />
                    </Container>
                </Suspense>
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
            </Container>
        </ThemeProvider>
    );
}
