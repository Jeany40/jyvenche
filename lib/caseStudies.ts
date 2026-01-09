/**
 * Case Studies Registry
 * 
 * Centralized import of all case study JSON files.
 * Uses types from types/content.ts to prevent prop drift.
 */

import type { CaseStudy } from '@/types/content'

import blisspointwell from '@/content/case-studies/blisspointwell.json'
import fondamantal from '@/content/case-studies/fondamantal.json'
import fondamantalMusicLibrary from '@/content/case-studies/fondamantal-music-library.json'
import fondamantalAlbumPlayer from '@/content/case-studies/fondamantal-album-player.json'
import fondamantalAdminDashboard from '@/content/case-studies/fondamantal-admin-dashboard.json'
import fondamantalBroadcast from '@/content/case-studies/fondamantal-broadcast.json'

// Re-export types for convenience
export type { CaseStudy, CaseStudySection, CaseStudyCta, CaseStudyMeta, CaseStudyLinkMap } from '@/types/content'

// Featured platform case study
export const featuredCaseStudy: CaseStudy = fondamantal as CaseStudy

// All case studies (for iteration)
export const caseStudies: CaseStudy[] = [
    fondamantal as CaseStudy,
    blisspointwell as CaseStudy,
]

// Fondamantal sub-systems
export const fondamantalSystems: CaseStudy[] = [
    fondamantalMusicLibrary as CaseStudy,
    fondamantalAlbumPlayer as CaseStudy,
    fondamantalAdminDashboard as CaseStudy,
    fondamantalBroadcast as CaseStudy,
]

// All case studies including sub-systems (for dynamic routing)
export const allCaseStudies: CaseStudy[] = [
    fondamantal as CaseStudy,
    blisspointwell as CaseStudy,
    fondamantalMusicLibrary as CaseStudy,
    fondamantalAlbumPlayer as CaseStudy,
    fondamantalAdminDashboard as CaseStudy,
    fondamantalBroadcast as CaseStudy,
]

// Get case study by slug
export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return allCaseStudies.find(cs => cs.slug === slug)
}

// Additional projects (non-platform)
export const additionalProjects: CaseStudy[] = [
    blisspointwell as CaseStudy,
]
