import { App, Stack, StackProps, StaticSite } from "@serverless-stack/resources";

export class WebStack extends Stack {
  constructor(app: App, id: string, props?: StackProps) {
    super(app, id, props);

    const hostedZone = process.env.DOMAIN_NAME!
    const domainName = app.stage === "prod" ? hostedZone : `${app.stage}.${hostedZone}`

    const web = new StaticSite(this, "Web", {
      path: `./apps/web/`,
      buildOutput: "dist",
      customDomain: {
        hostedZone,
        domainName
      }
    })

    this.addOutputs({
      Url: web.customDomainUrl || web.url,
    })
  }
}
