declare module 'react-scroll' {
    import { ComponentType } from 'react';

    export const Link: ComponentType<{
        to: string;
        smooth?: boolean;
        duration?: number;
        offset?: number;
        spy?: boolean;
        activeClass?: string;
        onClick?: () => void;
    }>;

    export const animateScroll: {
        scrollToTop: (options?: { duration?: number }) => void;
        scrollToBottom: (options?: { duration?: number }) => void;
    };

    export const Events: {
        scrollEvent: {
            register(event: string, callback: () => void): void;
            remove(event: string): void;
        };
    };

    export const scroller: {
        scrollTo: (to: string, options?: { duration?: number; smooth?: boolean }) => void;
    };
}
