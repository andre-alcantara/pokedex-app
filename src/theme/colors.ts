export const COLORS = {
  background: "#ffff",
  card: "#2d2c2c",
  textPrimary: "#000000",
} as const;

export const TYPE_COLORS = {
  normal: "#acaa7a",
  flying: "#9e8fc5",
  water: "#6e8bc6",
  ice: "#98d6d5",
  fire: "#f17f2d",
  dragon: "#6357a6",
  electric: "#f7d233",
  steel: "#b8b8d2",
  rock: "#b9a338",
  ground: "#e0c166",
  grass: "#79c251",
  fairy: "#f7cbdf",
  psychic: "#f05889",
  fighting: "#c4312b",
  bug: "#aaba39",
  poison: "#9e4399",
  dark: "#725a4a",
  ghost: "#71599a",
} as const;

export const TYPE_TINT_COLORS = {
  normal: "#acaa7a12",
  flying: "#9e8fc512",
  water: "#6e8bc612",
  ice: "#98d6d51f",
  fire: "#f17f2d12",
  dragon: "#6357a612",
  electric: "#f7d23312",
  steel: "#b8b8d21f",
  rock: "#b9a33812",
  ground: "#e0c16612",
  grass: "#79c25112",
  fairy: "#f7cbdf1f",
  psychic: "#f0588912",
  fighting: "#c4312b12",
  bug: "#aaba3912",
  poison: "#9e439912",
  dark: "#725a4a12",
  ghost: "#71599a12",
} as const;

export type PokemonType = keyof typeof TYPE_COLORS;
