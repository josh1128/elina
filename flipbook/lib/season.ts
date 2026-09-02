export type SeasonPalette = {
  label: string;
  page: string;
  pageGlow: string;
  ink: string;
  inkSoft: string;
  accent: string;
  border: string;
  spine: string;
  control: string;
  progress: string;
  ambient: string;
  ornament: string;
};

type Stop = SeasonPalette & { at: number };

const STOPS: Stop[] = [
  {
    at: 0,
    label: "Summer",
    page: "#F8FBFD",
    pageGlow: "#EEF7FB",
    ink: "#183B56",
    inkSoft: "#445B6B",
    accent: "#6F96B4",
    border: "#BFD7E6",
    spine: "rgba(111, 150, 180, 0.16)",
    control: "#183B56",
    progress: "#6F96B4",
    ambient: "rgba(191, 215, 230, 0.42)",
    ornament: "≈",
  },
  {
    at: 0.42,
    label: "Late Summer",
    page: "#F8FAF2",
    pageGlow: "#F1F5E8",
    ink: "#315149",
    inkSoft: "#5E6B5F",
    accent: "#92A77A",
    border: "#CDD9B7",
    spine: "rgba(146, 167, 122, 0.16)",
    control: "#456B61",
    progress: "#92A77A",
    ambient: "rgba(205, 217, 183, 0.34)",
    ornament: "✦",
  },
  {
    at: 0.72,
    label: "Golden Hour",
    page: "#FCF8EE",
    pageGlow: "#F7EFD9",
    ink: "#5A4633",
    inkSoft: "#74624F",
    accent: "#C49557",
    border: "#E4D1A8",
    spine: "rgba(196, 149, 87, 0.16)",
    control: "#765B3F",
    progress: "#C49557",
    ambient: "rgba(228, 209, 168, 0.34)",
    ornament: "✧",
  },
  {
    at: 1,
    label: "Fall",
    page: "#FBF2E8",
    pageGlow: "#F3E2D0",
    ink: "#4B3026",
    inkSoft: "#705447",
    accent: "#B7663E",
    border: "#D9B394",
    spine: "rgba(183, 102, 62, 0.17)",
    control: "#6A3F2D",
    progress: "#B7663E",
    ambient: "rgba(217, 179, 148, 0.38)",
    ornament: "❧",
  },
];

function hexToRgb(hex: string) {
  const cleaned = hex.replace("#", "");
  const value = Number.parseInt(cleaned, 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255,
  };
}

function toHex(value: number) {
  return Math.round(value).toString(16).padStart(2, "0");
}

function mixHex(a: string, b: string, t: number) {
  const first = hexToRgb(a);
  const second = hexToRgb(b);
  const mix = (x: number, y: number) => x + (y - x) * t;

  return `#${toHex(mix(first.r, second.r))}${toHex(
    mix(first.g, second.g)
  )}${toHex(mix(first.b, second.b))}`;
}

export function getSeasonPalette(index: number, total: number): SeasonPalette {
  const progress = total <= 1 ? 0 : Math.min(Math.max(index / (total - 1), 0), 1);

  let start = STOPS[0];
  let end = STOPS[STOPS.length - 1];

  for (let i = 0; i < STOPS.length - 1; i += 1) {
    if (progress >= STOPS[i].at && progress <= STOPS[i + 1].at) {
      start = STOPS[i];
      end = STOPS[i + 1];
      break;
    }
  }

  const localProgress =
    end.at === start.at ? 0 : (progress - start.at) / (end.at - start.at);

  const label =
    progress < 0.32
      ? "Summer"
      : progress < 0.58
        ? "Late Summer"
        : progress < 0.82
          ? "Golden Hour"
          : "Fall";

  const ornament =
    progress < 0.32 ? "≈" : progress < 0.58 ? "✦" : progress < 0.82 ? "✧" : "❧";

  return {
    label,
    page: mixHex(start.page, end.page, localProgress),
    pageGlow: mixHex(start.pageGlow, end.pageGlow, localProgress),
    ink: mixHex(start.ink, end.ink, localProgress),
    inkSoft: mixHex(start.inkSoft, end.inkSoft, localProgress),
    accent: mixHex(start.accent, end.accent, localProgress),
    border: mixHex(start.border, end.border, localProgress),
    control: mixHex(start.control, end.control, localProgress),
    progress: mixHex(start.progress, end.progress, localProgress),
    spine: start.spine,
    ambient: start.ambient,
    ornament,
  };
}
