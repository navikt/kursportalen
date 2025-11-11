import type { Metadata } from 'next';
import Script from 'next/script';
import '@navikt/ds-css';
import { fetchDecoratorReact } from '@navikt/nav-dekoratoren-moduler/ssr';
import { Page } from '@navikt/ds-react';


export const metadata: Metadata = {
    title: 'Kursen',
    description: 'Markedets puls – rett fra NAV IT',
};


const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    const Decorator = await fetchDecoratorReact({ env: 'prod' });
    return (
        <html lang="no">
        <head><Decorator.HeadAssets /></head>
        <body>
        <Page footer={<Decorator.Footer />}>
            <Decorator.Header />
            {children}
            <Decorator.Scripts loader={Script} />
        </Page>
        </body>
        </html>
    );
};
export default RootLayout;