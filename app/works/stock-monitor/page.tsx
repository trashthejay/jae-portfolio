import type { Metadata } from 'next'
import StockMonitorContent from './StockMonitorContent'

export const metadata: Metadata = {
  title: 'Stock Monitor',
  description:
    'A daily automated check that flags out-of-stock items on a shopping site before customers or partners notice, with a searchable team dashboard.',
}

export default function StockMonitorPage() {
  return <StockMonitorContent />
}
