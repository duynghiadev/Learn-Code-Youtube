import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#e64980',
        text: '#343a40',
        bgColor: '#adb5bd',
        border: '#adb5bd',
      },
      padding: {
        p4px: '4px',
        ppx: '5px',
        p7px: '7px',
        p8px: '8px',
        p10px: '10px',
        p12px: '12px',
        p13px: '13px',
        p15px: '15px',
        p16px: '16px',
        p20px: '20px',
        p24px: '24px',
        p30px: '30px',
        p40px: '40px',
        p45px: '45px',
        p50px: '50px',
      },
      gap: {
        g5: '5px',
        g8: '8px',
        g10: '10px',
        g12: '12px',
        g16: '16px',
        g20: '20px',
        g22: '22px',
        g24: '24px',
        g30: '30px',
        g48: '48px',
      },
      margin: {
        m4: '4px',
        m5: '5px',
        m8: '8px',
        m10: '10px',
        m12: '12px',
        m15: '15px',
        m16: '16px',
        m18: '18px',
        m20: '20px',
        m24: '24px',
        m26: '26px',
        m30: '30px',
        m34: '34px',
        m40: '40px',
        m48: '48px',
        m50: '50px',
        m60: '60px',
        m80: '80px',
      },
      fontSize: {
        fs12: '12px',
        fs13: '13px',
        fs14: '14px',
        fs15: '15px',
        fs16: '16px',
        fs17: '17px',
        fs20: '20px',
        fs24: '24px',
        fs28: '28px',
        fs32: '32px',
        fs48: '48px',
        fs54: '54px',
      },

      animation: {
        fadeInOut: 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'scale(0)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        blur: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
