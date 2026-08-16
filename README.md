# KUNSTHUIS

### Contemporary Art — Antwerp, Belgium

## 1. Koncepcja projektu

KUNSTHUIS to fikcyjna współczesna galeria sztuki z Antwerpii.

Projekt ma być pełnoprawną aplikacją webową stworzoną w **React + TypeScript**, a nie jedynie statycznym landing page'em.

Główne elementy:

- nowoczesna publiczna strona galerii,
- system wystaw,
- system wydarzeń działających przez cały rok,
- profile artystów,
- dynamiczna zawartość pobierana z API,
- pełny panel administracyjny,
- autoryzacja administratorów,
- CRUD dla wystaw, eventów i artystów,
- biblioteka mediów,
- kalendarz wydarzeń,
- własny custom cursor przepisany do React,
- responsive design,
- animacje i interakcje.

Projekt powinien wyglądać jak prawdziwa strona współczesnej galerii, której zawartość jest regularnie aktualizowana przez pracowników.

---

# 2. Art Direction

Inspiracją dla strony jest estetyka nowoczesnych belgijskich instytucji kultury, galerii oraz stron eventowych.

Nie kopiujemy konkretnej strony.

Główne cechy:

- bardzo duża typografia,
- mocne zdjęcia,
- dużo przestrzeni,
- asymetryczne layouty,
- editorial design,
- odważne przejścia między sekcjami,
- minimalistyczna nawigacja,
- mocne interakcje hover,
- subtelne animacje,
- kontrast między czernią i kobaltem.

Strona ma wyglądać bardziej jak **digital art direction** niż klasyczna strona muzeum.

---

# 3. Visual Identity

## Główne kolory

### Black

```text
#08090B
```

Kolor podstawowy strony.

Używany do:

- głównego tła,
- tekstu,
- navbaru,
- dużych sekcji,
- footeru,
- elementów UI,
- custom cursora.

### Cobalt Blue

```text
#2855D9
```

Kolor charakterystyczny marki.

Używany oszczędnie jako:

- accent,
- aktywne linki,
- daty,
- hover states,
- buttons,
- cursor states,
- oznaczenia eventów,
- wybrane sekcje,
- elementy dekoracyjne.

Nie należy używać wielu dodatkowych kolorów.

System wizualny powinien być oparty przede wszystkim na:

```text
BLACK
+
COBALT
```

---

# 4. Starry Night Inspired Overlay

W projekcie można wykorzystać subtelny motyw inspirowany nocnym niebem i charakterystycznym ruchem pędzla znanym z dzieł Van Gogha.

Nie należy jednak używać bezpośredniej kopii obrazu „The Starry Night”.

Motyw powinien być abstrakcyjny.

Możliwe elementy:

- niebieskie wirujące struktury,
- delikatny grain,
- organiczne linie,
- abstrakcyjne „brush strokes”,
- subtelne gwiazdy,
- wolny ruch w tle.

Przykład:

```text
BLACK BACKGROUND

       ~~~~~~~
   ~~~~~~~~~~~~~~~
 ~~~~~~~      ~~~~~
       ✦
 ~~~~~~~~~~~~~~~
      ~~~~~~~

          KUNSTHUIS
```

Overlay powinien mieć niską opacity.

Nie może przeszkadzać w czytaniu treści.

Najlepiej używać go tylko w wybranych sekcjach:

- hero,
- exhibition hero,
- wybrane dark sections,
- footer.

---

# 5. Branding

Logo:

```text
KUNSTHUIS
```

Subline:

```text
CONTEMPORARY ART
ANTWERP · BELGIUM
```

Alternatywnie:

```text
KUNSTHUIS
ANTWERP / BE
```

Branding powinien być typograficzny.

Nie używać typowej ikony galerii, pędzla ani obrazu jako logo.

---

# 6. Public Website

## Routes

```text
/
 /exhibitions
 /exhibitions/:slug

 /events
 /events/:slug

 /artists
 /artists/:slug

 /about
```

---

# 7. Navbar

Desktop:

```text
KUNSTHUIS

EXHIBITIONS
EVENTS
ARTISTS
ABOUT

MENU
```

Można również dodać mały element:

```text
ANTWERP / BE
```

Navbar powinien być minimalistyczny i częściowo transparentny na hero.

Na mobile:

```text
KUNSTHUIS                         MENU
```

Po kliknięciu:

pełnoekranowe menu.

---

# 8. Homepage

Homepage powinna być przede wszystkim wizualna.

Struktura:

```text
NAVBAR
↓
HERO
↓
CURRENT EXHIBITION
↓
UPCOMING EVENTS
↓
EXHIBITIONS
↓
ARTISTS
↓
ABOUT
↓
FOOTER
```

---

# 9. Hero

Hero może wykorzystywać:

- pełnoekranowe zdjęcie,
- video,
- abstrakcyjny artwork,
- Starry Night-inspired overlay.

Przykładowa kompozycja:

```text
KUNSTHUIS
ANTWERP / BELGIUM


CURRENT EXHIBITION


THE
WEIGHT
OF LIGHT


12.09 — 28.10.2026
```

Typografia powinna być bardzo duża.

Można zastosować asymetryczne pozycjonowanie tekstu.

---

# 10. Current Exhibition

Sekcja aktualnej wystawy.

```text
CURRENT EXHIBITION

THE WEIGHT OF LIGHT

12.09 — 28.10.2026

[ LARGE IMAGE ]

Explore exhibition →
```

Dane powinny pochodzić z API.

Nie powinny być wpisane bezpośrednio w komponent.

---

# 11. Exhibitions

Route:

```text
/exhibitions
```

Filtry:

```text
ALL
CURRENT
UPCOMING
PAST
```

Każda karta:

```text
IMAGE

EXHIBITION 04

THE WEIGHT OF LIGHT

12 SEP — 28 OCT 2026
```

Hover:

- zmiana obrazu,
- subtle scale,
- cobalt accent,
- custom cursor.

---

# 12. Exhibition Details

Route:

```text
/exhibitions/:slug
```

Strona wystawy:

```text
EXHIBITION 04

THE WEIGHT OF LIGHT

12.09 — 28.10.2026

[ HERO IMAGE ]

DESCRIPTION

ARTISTS

[ ARTIST ]
[ ARTIST ]

GALLERY

[ IMAGE ]
[ IMAGE ]
[ IMAGE ]

CURATED BY

...

← ALL EXHIBITIONS
```

---

# 13. Events

Route:

```text
/events
```

Wydarzenia są jednym z głównych elementów projektu.

Typy:

```text
OPENING
ARTIST TALK
WORKSHOP
LECTURE
GUIDED TOUR
PERFORMANCE
SPECIAL EVENT
```

Event może zawierać:

```text
title
slug
type
description
date
startTime
endTime
image
location
exhibition
artists
status
```

---

# 14. Event Listing

Przykład:

```text
SEPTEMBER 2026


12 SEP
OPENING

The Weight of Light

19:00 — 23:00


18 SEP
ARTIST TALK

Anna Kowalska

18:00 — 19:30


25 SEP
WORKSHOP

Experimental Forms

14:00 — 17:00
```

Eventy powinny być sortowane chronologicznie.

---

# 15. Annual Event Program

Galeria posiada program na cały rok.

Widok:

```text
2026

JAN
FEB
MAR
APR
MAY
JUN
JUL
AUG
SEP
OCT
NOV
DEC
```

Po wybraniu miesiąca:

```text
SEPTEMBER

12 SEP
Opening

18 SEP
Artist Talk

25 SEP
Workshop
```

Opcjonalnie:

- calendar view,
- list view,
- filtering by event type.

---

# 16. Automatyczne statusy

System powinien automatycznie rozpoznawać:

```text
UPCOMING
CURRENT
PAST
```

Na podstawie dat.

```text
startDate > today
→ UPCOMING

startDate <= today <= endDate
→ CURRENT

endDate < today
→ PAST
```

Dzięki temu strona sama aktualizuje program wraz z upływem czasu.

---

# 17. Artists

Route:

```text
/artists
```

Lista artystów.

Karta:

```text
IMAGE

ANNA KOWALSKA

Contemporary Artist
```

Artist details:

```text
/artists/:slug
```

Dane:

```text
name
slug
portrait
bio
website
socialLinks
works
exhibitions
```

---

# 18. About

Informacje:

- historia KUNSTHUIS,
- misja,
- zespół,
- lokalizacja,
- opening hours,
- kontakt.

Można dodać:

```text
ANTWERP
BELGIUM

51°13′N
4°24′E
```

jako element art direction.

---

# 19. Footer

```text
KUNSTHUIS

CONTEMPORARY ART
ANTWERP · BELGIUM


EXHIBITIONS
EVENTS
ARTISTS
ABOUT


INSTAGRAM
EMAIL


© 2026 KUNSTHUIS
```

Footer może posiadać mocny czarny background i subtelny Starry Night-inspired overlay.

---

# 20. Custom Cursor

Istniejący custom cursor użytkownika powinien zostać przepisany do React.

Komponent:

```text
CustomCursor
```

Powinien obsługiwać:

```text
default
hover
view
event
drag
click
```

Przykład:

```text
DEFAULT

●


IMAGE

VIEW →


EVENT

EVENT →


LINK

OPEN →
```

Elementy mogą deklarować zachowanie:

```html
data-cursor="view"
```

lub:

```html
data-cursor="event"
```

Cursor powinien:

- śledzić mouse position,
- posiadać smooth interpolation,
- reagować na hover,
- reagować na kliknięcie,
- obsługiwać różne warianty,
- działać poprawnie przy zmianie route,
- być wyłączony na urządzeniach touch,
- respektować `prefers-reduced-motion`.

---

# 21. Cursor + Cobalt

Kobalt może być wykorzystywany szczególnie w custom cursorze.

Przykład:

```text
normal
●

hover image
VIEW

hover event
EVENT →

click
●
```

W niektórych stanach cursor może przechodzić z czarnego na cobalt.

---

# 22. Admin Panel

Admin panel jest pełnoprawną częścią projektu.

Route:

```text
/admin
```

Layout:

```text
┌─────────────────────────────────────────┐
│ KUNSTHUIS / ADMIN                       │
├─────────────┬───────────────────────────┤
│ Dashboard   │                           │
│ Exhibitions │         CONTENT           │
│ Events      │                           │
│ Artists     │                           │
│ Media       │                           │
│ Settings    │                           │
└─────────────┴───────────────────────────┘
```

---

# 23. Admin Dashboard

Dashboard:

```text
DASHBOARD

CURRENT EXHIBITION
The Weight of Light

UPCOMING EVENTS
12

EXHIBITIONS
18

ARTISTS
24
```

Dodatkowo:

```text
UPCOMING EVENTS

12 SEP   Opening
18 SEP   Artist Talk
25 SEP   Workshop
```

---

# 24. Exhibition Management

Route:

```text
/admin/exhibitions
```

Lista wystaw:

```text
TITLE
STATUS
DATE
ACTIONS
```

Akcje:

```text
EDIT
DUPLICATE
PUBLISH
UNPUBLISH
DELETE
```

---

# 25. Create / Edit Exhibition

Form:

```text
CREATE EXHIBITION

Title
Slug
Description

Start Date
End Date

Cover Image

Gallery Images

Artists

Curator

Status

[ SAVE ]
```

Status:

```text
DRAFT
PUBLISHED
```

---

# 26. Event Management

Route:

```text
/admin/events
```

CRUD dla wydarzeń.

Form:

```text
CREATE EVENT

Title
Type
Date
Start Time
End Time

Description

Image

Location

Related Exhibition

Artists

Status

[ SAVE EVENT ]
```

---

# 27. Admin Calendar

Kalendarz wszystkich wydarzeń.

```text
SEPTEMBER 2026

MON TUE WED THU FRI SAT SUN

        1   2   3   4   5   6
7       8   9   10  11  12  13
14      15  16  17  18  19  20
21      22  23  24  25  26  27
28      29  30
```

Eventy widoczne na odpowiednich dniach.

Kliknięcie eventu otwiera szczegóły lub edycję.

---

# 28. Artist Management

Route:

```text
/admin/artists
```

CRUD:

```text
CREATE
READ
UPDATE
DELETE
```

Pola:

```text
Name
Bio
Portrait
Website
Social links
Exhibitions
```

---

# 29. Media Library

Route:

```text
/admin/media
```

Grid:

```text
[IMAGE] [IMAGE] [IMAGE] [IMAGE]
[IMAGE] [IMAGE] [IMAGE] [IMAGE]
```

Funkcje:

```text
UPLOAD
DELETE
COPY URL
```

Metadata:

```text
filename
type
size
uploadedAt
```

---

# 30. Authentication

Admin powinien posiadać osobny login.

```text
/login
```

Flow:

```text
LOGIN
 ↓
AUTHENTICATION
 ↓
ADMIN DASHBOARD
```

Niezalogowany użytkownik próbujący wejść do `/admin` zostaje przekierowany do `/login`.

---

# 31. Roles

System może posiadać role:

### ADMIN

- create
- edit
- delete
- publish
- manage users

### EDITOR

- create
- edit
- publish

### VIEWER

- read only

Authorization musi być sprawdzane również po stronie backendu.

---

# 32. Data Model

## Exhibition

```ts
interface Exhibition {
  id: string;
  title: string;
  slug: string;
  description: string;
  coverImage: string;
  images: string[];
  startDate: string;
  endDate: string;
  artists: string[];
  curator?: string;
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}
```

## Event

```ts
interface Event {
  id: string;
  title: string;
  slug: string;
  type: EventType;
  description: string;
  date: string;
  startTime: string;
  endTime: string;
  image?: string;
  location: string;
  exhibitionId?: string;
  artistIds: string[];
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}
```

## Artist

```ts
interface Artist {
  id: string;
  name: string;
  slug: string;
  bio: string;
  portrait: string;
  website?: string;
  socialLinks?: string[];
}
```

---

# 33. React Architecture

```text
src/

├── components/
│   ├── Header/
│   ├── Footer/
│   ├── CustomCursor/
│   ├── ExhibitionCard/
│   ├── EventCard/
│   ├── ArtistCard/
│   ├── ImageReveal/
│   └── ...
│
├── pages/
│   ├── Home/
│   ├── Exhibitions/
│   ├── ExhibitionDetails/
│   ├── Events/
│   ├── EventDetails/
│   ├── Artists/
│   ├── ArtistDetails/
│   └── About/
│
├── admin/
│   ├── Dashboard/
│   ├── Exhibitions/
│   ├── Events/
│   ├── Artists/
│   ├── Media/
│   └── Settings/
│
├── hooks/
│
├── context/
│
├── services/
│   └── api.ts
│
├── types/
│
├── utils/
│
├── assets/
│
├── App.tsx
└── main.tsx
```

---

# 34. API Architecture

Public website i admin panel korzystają z tego samego backendu.

```text
                 DATABASE
                     ↑
                     ↓
                    API
                  ↙     ↘
             WEBSITE    ADMIN
```

Przykładowe endpointy:

```text
GET    /api/exhibitions
GET    /api/exhibitions/:slug
POST   /api/exhibitions
PATCH  /api/exhibitions/:id
DELETE /api/exhibitions/:id

GET    /api/events
GET    /api/events/:slug
POST   /api/events
PATCH  /api/events/:id
DELETE /api/events/:id

GET    /api/artists
POST   /api/artists
PATCH  /api/artists/:id
DELETE /api/artists/:id
```

---

# 35. Loading / Error / Empty States

Każdy element pobierający dane powinien obsługiwać:

```text
LOADING
SUCCESS
EMPTY
ERROR
```

Przykłady:

```text
Loading exhibitions...
```

```text
No upcoming events.
```

```text
Something went wrong.
Try again.
```

---

# 36. Responsive Design

Desktop, tablet i mobile muszą korzystać z tego samego kodu React.

Responsywność powinna być realizowana przede wszystkim przez CSS.

Wykorzystać m.in.:

```text
flexbox
grid
clamp()
min()
max()
aspect-ratio
rem
%
vw
dvh
media queries
```

Na mobile:

- menu pełnoekranowe,
- single-column layouts,
- mniejsza typografia,
- większe touch targets,
- brak custom cursora,
- uproszczone animacje.

---

# 37. Accessibility

Projekt powinien obsługiwać:

- semantic HTML,
- keyboard navigation,
- focus states,
- alt text,
- odpowiedni kontrast,
- reduced motion,
- screen reader-friendly controls.

Custom cursor nie może być wymagany do korzystania ze strony.

---

# 38. Performance

Należy uważać szczególnie na:

- duże obrazy,
- galerie zdjęć,
- animacje,
- video,
- custom cursor,
- scroll effects.

Obrazy powinny być odpowiednio zoptymalizowane.

Animacje nie powinny powodować niepotrzebnych layout recalculations.

Ciężkie efekty powinny być wyłączane lub ograniczane:

```text
mobile
touch devices
prefers-reduced-motion
```

---

# 39. Development Roadmap

Projekt należy rozwijać etapami.

## Phase 1 — Setup

- Vite
- React
- TypeScript
- routing
- folder structure

## Phase 2 — Public UI

- navbar
- hero
- exhibitions
- events
- artists
- about
- footer

## Phase 3 — Responsive

- desktop
- tablet
- mobile

## Phase 4 — Interactions

- hover
- page transitions
- image reveals
- scroll animations
- Starry Night-inspired overlay

## Phase 5 — Custom Cursor

Przepisanie istniejącego cursora do React.

## Phase 6 — Mock Data

Dane lokalne:

```text
exhibitions.ts
events.ts
artists.ts
```

## Phase 7 — Backend

- API
- database
- authentication

## Phase 8 — Admin

- dashboard
- exhibitions
- events
- artists
- media
- calendar

## Phase 9 — CRUD

Pełne:

```text
CREATE
READ
UPDATE
DELETE
```

## Phase 10 — Final Polish

- animations
- accessibility
- loading states
- error handling
- performance
- SEO
- mobile polish

---

# 40. Finalny rezultat

Docelowo KUNSTHUIS powinien być kompletną aplikacją:

```text
                    KUNSTHUIS
                         │
              ┌──────────┴──────────┐
              │                     │
        PUBLIC WEBSITE         ADMIN PANEL
              │                     │
       Exhibitions             Dashboard
       Events                  Exhibitions
       Artists                 Events
       About                   Artists
                              Media
              │                     │
              └──────────┬──────────┘
                         │
                        API
                         │
                     DATABASE
```

Administrator może wejść do panelu i:

```text
ADD EXHIBITION
ADD EVENT
ADD ARTIST
UPLOAD IMAGE
EDIT CONTENT
PUBLISH
```

A publiczna strona automatycznie prezentuje nowe dane.

Przykład:

```text
ADMIN
↓
Create "Night Forms"
↓
Publish
↓
Database
↓
API
↓
React
↓
/exhibitions
↓
Night Forms appears
```

---

# 41. Główna filozofia projektu

Nie budować wszystkiego od razu.

Kolejność:

```text
DZIAŁA
↓
JEST ŁADNE
↓
JEST RESPONSIVE
↓
JEST DYNAMICZNE
↓
JEST POŁĄCZONE Z API
↓
MA ADMIN PANEL
↓
JEST DOPRACOWANE
```

Najpierw należy nauczyć się Reacta poprzez budowanie działających komponentów.

Dopiero później dodawać:

- Context,
- custom hooks,
- API,
- authentication,
- CRUD,
- caching,
- bardziej zaawansowaną architekturę.

Celem nie jest stworzenie projektu „idealnego od pierwszej linii kodu”.

Celem jest stworzenie **prawdziwej aplikacji od zera**, a następnie stopniowe poprawianie jej architektury.

---

# 42. Identity Summary

```text
NAME
KUNSTHUIS

LOCATION
Antwerp, Belgium

TYPE
Contemporary Art Gallery

STACK
React + TypeScript + Vite

COLORS
Black
Cobalt Blue

FONT
Space Grotesk

VISUAL MOTIF
Abstract Starry Night-inspired night texture

CORE FEATURES
Exhibitions
Events
Artists
Annual Program
Admin Panel
Authentication
CRUD
Media Library
Calendar
Custom Cursor

STYLE
Editorial
Minimal
Experimental
Contemporary
Belgian
Art-focused
```

**KUNSTHUIS — Contemporary Art, Antwerp.**
