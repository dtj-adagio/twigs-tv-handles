
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
      <div className="flex flex-2 flex-row">
        {(
          <div className="flex max-w-[980px] flex-col items-start gap-4">
            children
          </div>
        ) && (
          <div className="flex max-w-[980px] flex-col items-start gap-4">
            <iframe src="https://embed.twitch.tv/?channel=tofie&parent=twigs.tv" height="480px" width="854px" />
          </div>
        )}
      </div>
    </>
  )
}
