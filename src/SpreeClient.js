/* global process */
import { makeClient } from "@spree/storefront-api-v2-sdk";

const client = makeClient({
  host: process.env.SPREE_CLIENT_HOST || "https://psycle-api.herokuapp.com"
});

export default client;
