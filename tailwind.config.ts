import { createColorSet, withAccountKitUi } from "@account-kit/react/tailwind";

export default withAccountKitUi({
  content: ["./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  colors: {
    "btn-primary": createColorSet("#E82594", "#FF66CC"),
    "fg-accent-brand": createColorSet("#E82594", "#FF66CC"),
  },
  plugins: [],
})
