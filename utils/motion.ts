import { delay } from "framer-motion";

const baseTransition = { type: "spring", duration: 0.8 };

// Utility to handle direction-based animation values
const getDirectionValues = (direction: string) => {
    switch (direction) {
        case "left":
            return { x: -100, y: 0 };
        case "right":
            return { x: 100, y: 0 };
        case "up":
            return { x: 0, y: 100 };
        case "down":
            return { x: 0, y: -100 };
        default:
            return { x: 0, y: 0 };
    }
};

export const slideAnimation = (direction: string) => {
    const { x, y } = getDirectionValues(direction);
    return {
        initial: {
            x,
            y,
            opacity: 0,
            transition: { ...baseTransition, delay: 0.5 },
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { ...baseTransition },
        },
        exit: {
            x,
            y,
            transition: { ...baseTransition },
        },
    };
};

export const fadeAnimation = {
    initial: {
        opacity: 0,
        transition: { ...baseTransition, delay: 0.5 },
    },
    animate: {
        opacity: 1,
        transition: { ...baseTransition },
    },
    exit: {
        opacity: 0,
        transition: { ...baseTransition },
    },
};

export const headTextAnimation = {
    initial: { x: 100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: {
        type: "spring",
        damping: 5,
        stiffness: 40,
        restDelta: 0.001,
        duration: 0.3,
        delay: 0.9,
    },
};

export const headContentAnimation = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
        type: "spring",
        damping: 7,
        stiffness: 30,
        restDelta: 0.001,
        duration: 0.6,
        delay: 0.9,
        delayChildren: 0.2,
    },
};

export const headContainerAnimation = {
    initial: { x: -100, opacity: 0, transition: { ...baseTransition, delay: 0.9 } },
    animate: { x: 0, opacity: 1, transition: { ...baseTransition } },
    exit: { x: -100, opacity: 0, transition: { ...baseTransition } },
};