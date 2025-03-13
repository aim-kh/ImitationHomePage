import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        ryumin: [
          '"リュウミン EB-KL"',
          '"Ryumin ExtraBold KL"',
          '游明朝',
          'YuMincho',
          '"ヒラギノ明朝 ProN W3"',
          '"Hiragino Mincho ProN"',
          '"HG明朝E"',
          '"ＭＳ Ｐ明朝"',
          '"ＭＳ 明朝"',
          'serif',
        ],
        hirakaku: [
          '"HiraKakuStd W4"',
          '"Hiragino Kaku Gothic Pro"',
          '游ゴシック体',
          '游ゴシック',
          '"Yu Gothic"',
          'YuGothic',
          'メイリオ',
          'Verdana',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
