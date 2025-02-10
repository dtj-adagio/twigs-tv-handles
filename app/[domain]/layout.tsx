
import NextPlausible from "next-plausible"
import { siteConfig } from "@/config/site"
import { MainNav } from "@/components/main-nav"
import { SiteHeader } from "@/components/site-header"

interface Props {
  children: React.ReactNode
  params: { domain: string }
}

export default function DomainLayout({ children, params }: Props) {
  return (
    <>
      <NextPlausible
        domain={params.domain}
        customDomain={process.env.PLAUSIBLE_CUSTOM_DOMAIN}
        trackOutboundLinks
        selfHosted
      />
      <SiteHeader items={siteConfig.mainNav}>
        <MainNav title={params.domain} items={siteConfig.mainNav} />
      </SiteHeader>
      <div className="flex flex-wrap">
        {children}
        <div className="container grid items-top gap-6 pb-8 md:py-10 flex-1">
          <iframe src="https://embed.twitch.tv/?channel=tofie&parent=twigs.tv&layout=video" height="480px" width="854px"></iframe>
          <p className="mt-6 max-w-lg text-sm">
            More Tofie at{" "}
            <a href="https://tofiemusic.net/" className="underline">
              tofiemusic.net
            </a>
          </p>
        </div>        
      </div>
    </>
  )
}
