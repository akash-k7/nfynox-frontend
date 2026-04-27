import { client } from "./graphql";

export async function getServices() {
  const query = `
    {
      services {
        nodes {
          title
          slug
        }
      }
    }
  `;
  return (await client.request(query)).services.nodes;
}

export async function getService(slug: string) {
  const query = `
    {
      service(id: "${slug}", idType: SLUG) {
        title
        content
      }
    }
  `;
  return (await client.request(query)).service;
}
