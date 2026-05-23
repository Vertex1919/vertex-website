import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {

  return [

    {
      url: "https://vertexconstructionservices.in",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },

    {
      url: "https://vertexconstructionservices.in/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: "https://vertexconstructionservices.in/expertise",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

    {
      url: "https://vertexconstructionservices.in/clients",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },

    {
      url: "https://vertexconstructionservices.in/careers",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },

    {
      url: "https://vertexconstructionservices.in/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },

  ];
}