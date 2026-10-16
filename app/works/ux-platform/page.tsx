import type { Metadata } from 'next'
import UxPlatformContent from './UxPlatformContent'

export const metadata: Metadata = {
  title: 'UX/CX Analysis Platform',
  description:
    'AI-powered page analysis: a 5-call Claude Vision pipeline that scores any digital product page, compares A/B variants, and exports shareable reports.',
}

export default function UxPlatformPage() {
  return <UxPlatformContent />
}
