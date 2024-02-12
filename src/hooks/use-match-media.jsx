import { useState, useLayoutEffect } from 'react';

const queries = [
    '(max-width: 500px)',
    '(min-width: 767px) and (max-width: 1199px)',
    '(min-width: 1200px)',
];

export const useMathcMedia = () => {
    const mediaQuerryLists = queries.map(query => matchMedia(query));

    const getValues = () => mediaQuerryLists.map(mgl => mgl.matches);

    const [values, setValues] = useState(getValues);

    useLayoutEffect(() => {
        const handler = () => setValues(getValues);
        mediaQuerryLists.forEach(mql => mql.addEventListener('change', handler));

        return () =>
            mediaQuerryLists.forEach(mql =>
                mql.removeEventListener('change', handler),
            );
    });

    return ['isMobile', 'isTablet', 'isDesktop'].reduce(
        (acc, screen, index) => ({ ...acc, [screen]: values[index] }),
        {},
    );
};
