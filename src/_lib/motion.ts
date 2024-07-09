import { MotionSlideProps } from '@/app/interface/client-interface';

export function slideInFromLeft({ delay = 0.5, xAxis = -100 }: MotionSlideProps) {
    return {
        hidden: { x: xAxis, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export function slideInFromRight({ delay = 0.5, xAxis = 100 }: MotionSlideProps) {
    return {
        hidden: { x: xAxis, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export function slideInFromTop({ delay = 0.5, yAxis = -100 }: MotionSlideProps) {
    return {
        hidden: { y: yAxis, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}

export function slideInFromBottom({ delay = 0.5, yAxis = 100 }: MotionSlideProps) {
    return {
        hidden: { y: yAxis, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                delay: delay,
                duration: 0.5,
            },
        },
    };
}
