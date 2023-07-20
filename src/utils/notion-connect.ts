import { Client } from "@notionhq/client"
import { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints"

const notion = new Client({
  auth: import.meta.env.NOTION_TOKEN
})

export const getProjects = async () => {
  const { results } = await notion.databases.query({
    database_id: import.meta.env.NOTION_DATABASE_ID
  })

  return results.map((page: DatabaseObjectResponse) => {
    const { properties } = page
    const { name, image, description, status, languages, tags, repo } = properties

    return {
      name: name.title.length > 0 ? name.title[0].plain_text : '',
      image: image.files.length > 0 ? image.files[0].file.url : '/images/no-image.webp',
      description: description.rich_text.length > 0 ? description.rich_text[0].plain_text : '',
      status: status.status.name ?? 'Sin estado',
      languages: languages.multi_select.map((lang) => lang.name),
      tags: tags.multi_select.map((tag) => tag.name),
      repo: repo.url
    }
  })
}