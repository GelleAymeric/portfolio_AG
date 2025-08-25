"use client"

// app/services/page.tsx
import { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { services } from '@/data/services'
import { siteConfig } from '@/data/siteConfig'

const ServicesPage: NextPage = () => {
  const title = 'Nos Services'
  const description = `Découvrez comment ${siteConfig.name} peut vous aider à atteindre vos objectifs.`;

  return (
    <>
      <NextSeo
        title={`${title} | ${siteConfig.name}`}
        description={description}
        openGraph={{
          title: `${title} | ${siteConfig.name}`,
          description: description,
          url: `${siteConfig.url}/services`,
        }}
      />

      <div className="container mx-auto px-4 pt-32 pb-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-dark dark:text-brand-light mb-2">
            {title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {description}
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-4xl mb-4 text-accent">
                <service.icon />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ServicesPage
