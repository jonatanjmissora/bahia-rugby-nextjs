import { jugadoresMock } from "@/app/utils/jugadoresMock"

export async function GET(req, { params }) {
  let res = { ok: false, message: "Invalid Request, utiliza /api/jugadores" }

  const { jugadores } = params

  if (jugadores === "jugadores") {
    res = { ok: true, message: "", jugadores: { ...jugadoresMock } }
  }

  return Response.json(res)
}