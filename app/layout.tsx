import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Параллельный экспорт автомобилей',
  description: 'Широкий выбор автомобилей различных брендов через параллельный импорт',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Параллельный экспорт авто",
              "description": "Каталог автомобильных брендов доступных через параллельный импорт",
              "url": "https://ваш-сайт.ru"
            })
          }}
        />
        {children}
      </body>
    </html>
  )
}
