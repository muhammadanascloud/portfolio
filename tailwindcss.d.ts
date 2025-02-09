declare module "tailwindcss/lib/util/flattenColorPalette" {
    const flattenColorPalette: (colors: Record<string, string | string[]>) => Record<string, string | string[]>;
    export = flattenColorPalette;
  }
  