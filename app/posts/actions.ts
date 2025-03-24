"use server";

import { queryURL } from "@/utils/db-functions";
import { revalidatePath } from "next/cache";

const CLOUDFLARE_TOKEN = process.env.CLOUDFLARE_TOKEN;

export async function getPosts() {
  const url = queryURL;
  const data = {
    sql: "SELECT * FROM POSTS",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CLOUDFLARE_TOKEN}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const queryResult = await response.json();
    return queryResult;
  } catch (error) {
    console.error("Error al obtener posts:", error);
    throw error;
  }
}

export async function addPost(formData: FormData) {
  const rawData = {
    title: formData.get("title"),
    description: formData.get("description"),
  };

  const data = {
    sql: "INSERT INTO POSTS (title, description) VALUES ($1, $2)",
    params: [rawData.title, rawData.description],
  };

  console.log(rawData, data);

  try {
    const response = await fetch(queryURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${CLOUDFLARE_TOKEN}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorDetail = await response.text();
      console.error("Detalle del error:", errorDetail);
      throw new Error(`Error en la solicitud: ${response.statusText}`);
    }

    const queryResult = await response.json();

    // Revalidate Route
    revalidatePath("/posts");

    return queryResult;
  } catch (error) {
    console.error("Error al agregar post:", error);
    throw error;
  }
}
