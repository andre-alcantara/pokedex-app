# PokéDex App — Claude Context

## What this project is
A personal mobile app built with React Native and Expo. The goal is to
explore craft, micro-interactions, animations, and AI-assisted development
using PokéAPI as the data source. This is a portfolio and learning project —
not a commercial product.

## My experience level
Beginner with React Native and Expo. I know JavaScript/TypeScript basics but
I'm learning mobile patterns as I go. Explain decisions when they're not
obvious. Prefer explicit, readable code over clever one-liners.

## How I want to work with you
Full autopilot — generate complete, working code I can review. Don't give me
partial snippets and ask me to fill in the rest. When you create a file,
create the whole file. When you edit, show me exactly what changed and why.

## Stack
- React Native + Expo SDK (managed workflow)
- TypeScript (strict mode)
- Expo Router (file-based navigation)
- React Query / TanStack Query (server state + caching)
- Zustand (global UI state)
- Reanimated 3 + Moti (animations)
- expo-haptics (haptic feedback)
- AsyncStorage (local persistence)

## Data source
PokéAPI v2 — https://pokeapi.co — free, no auth required.
Base URL: https://pokeapi.co/api/v2/

## Features to build (in order)
1. Pokédex list — infinite scroll grid, search, skeleton loaders
2. Pokémon detail — stats, abilities, Pokédex entry, shiny toggle
3. Evolution chain viewer — animated, tappable
4. Favourites — persisted, with haptic feedback
5. Team builder — 6 slots, type coverage panel
6. Quiz mode — "Who's that Pokémon?" silhouette game

## Craft priorities
Every feature should feel native and polished. Specifically:
- Skeleton loaders on every screen that fetches data
- Haptic feedback on meaningful interactions (favourites, team, quiz answers)
- Entrance animations on lists and detail sections (fade + slide, spring physics)
- Shiny toggle on detail screen: crossfade between normal and shiny artwork
- Evolution chain: slides up on load, tappable to navigate between Pokémon
- Quiz: silhouette reveal on correct answer, shake animation on wrong answer

## Code conventions
- All components in src/components/ (shared) or src/features/<name>/ (feature-specific)
- All API calls go through src/services/pokeapi.ts — never fetch directly in a component
- All global state in src/store/ using Zustand slices
- Theme values (colours, spacing, font sizes, type colours) live in src/theme/index.ts
- Never hardcode colours or spacing — always reference the theme
- Use TYPE_COLORS from theme to tint UI elements by Pokémon type

## Folder structure
```
src/
  components/     shared UI primitives
  features/       pokedex | detail | favourites | team | quiz
  hooks/          custom React hooks
  services/       PokéAPI client + TypeScript types
  store/          Zustand slices
  theme/          colours, spacing, typography
app/              Expo Router screens
```

## What good looks like
- 60 fps scrolling and animations on a mid-range Android device
- Skeletons appear within 100ms of navigation — no blank screens
- All interactive elements have accessible labels
- The codebase is clean enough to show in a portfolio or interview
