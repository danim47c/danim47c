import { App } from "@serverless-stack/resources";
import { WebStack } from "./web";

if (!process.env.DOMAIN_NAME) throw new Error("DOMAIN_NAME is not set")

const stacks = (app: App) => {
  new WebStack(app, "web")
}

export default stacks