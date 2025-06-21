import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const FonAnimated = () => {
    const [init, setInit] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e) => {
            setIsDarkMode(e.matches); // Yangi qiymatni o'rnatish
        };

        // Boshlang‘ich qiymatni o‘rnatish
        setIsDarkMode(mediaQuery.matches);

        // Tinglovchini o‘rnatish
        mediaQuery.addEventListener('change', handleChange);

        // Tozalash funksiyasi (komponent unmount bo‘lganda) onClick
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const options = useMemo(
        () => ({
            background: {
                color: {
                    value: isDarkMode ? '#101828' : '#ffffff',
                },
            },
            fpsLimit: 90,
            interactivity: {
                events: {
                    onHover: {
                        enable: true,
                        mode: 'repulse',
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: isDarkMode ? '#ffffff' : '#000000',
                },
                links: {
                    color: isDarkMode ? '#ffffff' : '#000000',
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: {
                        default: 'bounce',
                    },
                    random: false,
                    speed: 6,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: 'circle',
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }),
        [isDarkMode]
    );

    if (init) {
        return <Particles id="tsparticles" options={options} />;
    }

    return <></>;
};

export default FonAnimated;
