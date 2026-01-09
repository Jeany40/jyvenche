# Notion Client Portal Structure

This document outlines the architecture for managing clients, projects, and portals using Notion.

## 1. Workspace Top-Level Pages
- **Jyvenche — Client Portal (Hub)**
  - **Portal Index (Client-facing)**: The centralized landing area for all active client portals.
  - **Client Projects (Database)**: Master list of all projects.
  - **Client Tasks (Database)**: Unified task management.
  - **Invoices (Database)**: Tracking billing and payment status.
  - **Files & Links (Database)**: Storage for assets and external links.
  - **Templates (Internal)**: Master templates for projects and portals.

> **Rule**: Everything client-facing lives under the *Portal Index*. Everything operational lives in databases.

---

## 2. Databases (Schema)

### A. Clients Database
*Purpose: One record per client (company/person)*
- **Client Name** (Title)
- **Primary Contact Name** (Text)
- **Email** (Email)
- **Website** (URL)
- **Status** (Select: Lead / Active / On Hold / Completed)
- **Projects** (Relation → Projects)
- **Created** (Created time)

### B. Projects Database
*Purpose: The core project management object*
- **Project Name** (Title)
- **Client** (Relation → Clients)
- **Project Type** (Select: Website / Platform / Admin Tool / Redesign)
- **Stage** (Select: Inquiry / Proposal / Contract / In Progress / Review / Launched / Maintenance)
- **Start/Target Dates** (Date)
- **Scope Summary** (Text)
- **Deliverables** (Multi-select)
- **Project Links** (URL): Figma, Staging, Repo.
- **Portal Visibility** (Checkbox): If checked, safe to show to client.
- **Portal Page** (URL): The shareable Notion link for the client.

### C. Tasks Database
*Purpose: Unified action items*
- **Task** (Title)
- **Project** (Relation → Projects)
- **Owner** (Select: Jyvenche / Client)
- **Status** (Select: Not started / In progress / Blocked / Done)
- **Priority** (Select: Low / Medium / High)
- **Due Date** (Date)
- **Category** (Select: Content / Design / Dev / Review / Billing)
- **Client Visible** (Checkbox): Only show these tasks to client.

### D. Invoices Database
*Purpose: Billing tracking*
- **Invoice #** (Title): e.g., INV-0007
- **Client/Project** (Relations)
- **Amount/Currency** (Number/USD)
- **Due Date** (Date)
- **Status** (Select: Draft / Sent / Paid / Overdue)
- **Stripe Link** (URL)
- **Client Visible** (Checkbox)

---

## 3. Client Portal Template
Create a template inside the **Projects DB** named: `Client Portal — Standard`.

**Sections**:
1. **Summary**: Goal, Scope, Timeline.
2. **Status**: Stage + Progress Note.
3. **Tasks**: Linked view of Tasks DB (Filter: `Project = Current`, `Client Visible = true`).
4. **Assets**: Linked view of Files DB (Filter: `Project = Current`, `Client Visible = true`).
5. **Invoices**: Linked view of Invoices DB (Filter: `Project = Current`, `Client Visible = true`).
6. **Communication**: Weekly updates and Q&A section.

---

## 4. Operational Rules

- **Client Access**: Access is provided via private sharing of the Notion portal link after onboarding.
- **Indexing**: All Notion portal pages MUST be set to "No Index" to prevent search engine leaks.
- **Naming Conventions**:
  - **Project**: `Client — Project Type — Phase` (BlissPointWell — Website — Phase 1)
  - **Invoice**: `INV-XXXX — Client — Project`
  - **Task**: `[Category] Task Summary`
