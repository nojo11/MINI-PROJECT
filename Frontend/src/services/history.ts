import type { RecentScan } from '@/types/history'

const scans: RecentScan[] = []

export function addRecentScan(scan: RecentScan): void {
  scans.unshift(scan)
  if (scans.length > 10) {
    scans.pop()
  }
}

export async function getRecentScans(): Promise<RecentScan[]> {
  return scans
}
