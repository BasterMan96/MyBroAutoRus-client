import type { Metadata } from 'next'
import './global.scss'

export const metadata: Metadata = {
  title: 'Параллельный экспорт автомобилей | Каталог брендов',
  description: 'Широкий выбор автомобилей различных брендов через параллельный импорт. Отзывы клиентов.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body itemScope itemType="https://schema.org/WebPage">
        <div className="page">
          {children}
        </div>
      </body>
    </html>
  )
}
