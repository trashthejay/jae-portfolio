import type { Metadata } from 'next'
import PageWrapper from '@/components/PageWrapper'
import ContactContent from './ContactContent'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Interested in collaborating or want to learn more? Get in touch with Jay.',
}

export default function ContactPage() {
  return (
    <PageWrapper>
      <ContactContent />
    </PageWrapper>
  )
}
