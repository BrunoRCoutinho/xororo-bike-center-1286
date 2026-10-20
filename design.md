# Xororó Bike Center — Design

Web showroom, technical catalog and service request experience for high-performance cyclists.

## Visual reference and brand

User-provided reference is an editorial, cinematic dark product page. Borrow only its layout rhythm: oversized type, generous black space, asymmetric image-and-copy sequences, thin rules and quiet micro-labels. Do not copy its text. Xororó's own identity remains black and vibrant yellow.

| Token | Value | Use |
|-------|-------|-----|
| background | #000000 | Dominant canvas |
| surface | #101112 | Cards and panels |
| accent | #E9EE18 | Main CTA, active states, labels |
| foreground | #F5F5F2 | Headlines |
| muted | #A9ACAD | Supporting text |
| border | rgba(219,223,228,.16) | Technical hairlines |

## Typography and layout

Archivo Black/system heavy for editorial display; DM Sans/system sans for UI and body. Display 64–170px responsive, uppercase micro-labels 10–12px with generous tracking, body 14–17px. Max content width 1440px; desktop inset 36–64px, mobile inset 20px. Big hero type beside cinematic cycling imagery; three discipline pillars; asymmetrical showroom; full-bleed workshop feature; service consultation; closing statement. Product page: large image gallery beside detailed specifications and enquiry controls.

Components use crisp white/12 hairlines, square to 8px corners, technical tags, solid yellow primary action, outline secondary action. Restrained 180–300ms hover and entrance transitions, image zoom, reduced-motion support. No unrelated bright colors.

## Routes and flows

- `/`: editorial home and featured showroom.
- `/catalogo`: filterable demo inventory by discipline, brand, size and status.
- `/catalogo/:slug`: image gallery, size selection, specs and contextual WhatsApp inquiry.
- `/servicos`: service packages and local time-preference request, followed by WhatsApp handoff and pending-validation explanation.
- `/pecas`: curated component and apparel categories with WhatsApp consultation; no unverified SKU claims.
- `/sobre`: shop philosophy and workshop capabilities; no fabricated team credentials.

API: typed oRPC `catalog.list`, `catalog.get`, `services.list` backed by local mock data. TanStack Query hooks in web queries. Data schema contains SKU, brand, specifications, availability and sizes. No checkout and no actual Cal.com reservation. WhatsApp target: +55 17 99273-6060. Mock products/prices/photography are visibly marked illustrative.
