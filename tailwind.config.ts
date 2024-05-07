import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            current: 'currentColor',
            transparent: 'transparent',
            secondary: {
                900: '#1D3E3B',
                800: '#2E615B',
                700: '#47988E',
                600: '#61CDC3',
                500: '#71DFD5',
                400: '#8DE5DE',
                300: '#A1E8E1',
                200: '#BCEEEA',
                100: '#CFF3F0',
                50: '#E6F9F6',
            },
            tertiary: {
                900: '#2D2343',
                800: '#3D305A',
                700: '#574380',
                600: '#6F56A4',
                500: '#7B5FB4',
                400: '#957FC3',
                300: '#A694CD',
                200: '#C2B5DD',
                100: '#D5CDE8',
                50: '#F1EFF8',
            },
            primary: {
                900: '#361000',
                800: '#802600',
                700: '#B23500',
                600: '#E94B00',
                500: '#FF5702',
                400: '#FF762A',
                300: '#FF8845',
                200: '#FFA673',
                100: '#FFB992',
                50: '#EBDFDF',
            },
            warning: {
                900: '#665E16',
                800: '#867A1D',
                700: '#AD9E26',
                600: '#DECC30',
                500: '#F6E233',
                400: '#F7E75C',
                300: '#F9EC76',
                200: '#FBF1A0',
                100: '#FCF6BF',
                50: '#FEFBEA',
            },
            success: {
                900: '#3A6410',
                800: '#4C8315',
                700: '#62A91B',
                600: '#7ED923',
                500: '#8AED26',
                400: '#A1F151',
                300: '#B1F46E',
                200: '#C9F79B',
                100: '#DBFABC',
                50: '#F3FDE9',
            },
            error: {
                900: '#65120C',
                800: '#841710',
                700: '#AA1E15',
                600: '#DA261A',
                500: '#F02A1D',
                400: '#F3554A',
                300: '#F57068',
                200: '#F89D97',
                100: '#FABDB9',
                50: '#FEEAE8',
            },
            information: {
                900: '#254A56',
                800: '#306171',
                700: '#3E7E92',
                600: '#50A1BB',
                500: '#58B1CD',
                400: '#79C1D7',
                300: '#8FCBDE',
                200: '#B2DBE8',
                100: '#CBE7F0',
                50: '#EEF7FA',
            },
            base: {
                900: '#12141B',
                800: '#181A23',
                700: '#1F212D',
                600: '#272B3A',
                500: '#2B2F40',
                400: '#555966',
                300: '#71747F',
                200: '#9D9FA7',
                100: '#BDBFC4',
                50: '#EAEAEC',
                0: '#FFFFFF',
            },
        },
        spacing: {
            0: '0',
            3: '0.1875rem',
            6: '0.375rem',
            12: '0.75rem',
            24: '1.5rem',
            32: '2rem',
            48: '3rem',
            64: '4rem',
            96: '6rem',
            128: '8rem',
            160: '10rem',
        },
        fontFamily: {
            jetbrains: ['var(--font-jetbrains)', 'sans-serif'],
            roundo: ['var(--font-roundo)', 'sans-serif'],
        },
        fontSize: {
            'clamp-h1': 'clamp(6.75rem, -0.0192rem + 10.5769vw, 9.5rem);',
            'clamp-h2': 'clamp(4.75rem, 1.6731rem + 4.8077vw, 6rem);',
            12: '0.75rem',
            base: '1rem',
            20: '1.25rem',
            25: '1.56rem',
            36: '2.25rem',
            48: '3rem',
            64: '4rem',
            96: '6rem',
            152: '9.5rem',
        },
        borderWidth: {
            0: '0',
            1: '1px',
            3: '3px',
            6: '6px',
            12: '12px',
            24: '24px',
        },
        borderRadius: {
            none: '0',
            6: '0.375rem',
            12: '0.75rem',
            24: '1.5rem',
            32: '2rem',
            full: '5.375rem',
        },
        container: {
            screens: {
                xl: '1280px',
            },
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            aspectRatio: {
                portal: '53/74',
            },
            animation: {
                float: 'float 2s cubic-bezier(0.63, -0.01, 0.39, 0.99) infinite alternate',
                'wp-float':
                    'wp-float 5s cubic-bezier(0.63, -0.01, 0.39, 0.99) infinite alternate',
                shake: 'shake 0.82s cubic-bezier(.36,.07,.19,.97) infinite alternate',
            },
            keyframes: {
                float: {
                    to: {
                        transform:
                            'translate3d(0, 10px, 0) rotate3d(0, 0, 1, -3deg)',
                    },
                },
                'wp-float': {
                    to: {
                        transform:
                            'translate3d(10%, -20%, 10px) rotate3d(1, 1, 1, -20deg)',
                    },
                },
                shake: {
                    '10%, 90%': {
                        transform: 'translate3d(-1px, 0, 0)',
                    },
                    '20%, 80%': {
                        transform: 'translate3d(2px, 0, 0)',
                    },
                    '30%, 50%, 70%': {
                        transform: 'translate3d(-3px, 0, 0)',
                    },
                    '40%, 60%': {
                        transform: 'translate3d(3px, 0, 0)',
                    },
                },
            },
        },
    },
    plugins: [],
}

export default config
