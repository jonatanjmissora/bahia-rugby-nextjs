import { jugadoresMock } from "@/app/utils/jugadoresMock"

export async function GET(req, { params }) {

  const { documento } = params
  let res = { ok: false, message: "Invalid Request, utiliza api/jugadores/[documento]" }

  const jugador = jugadoresMock.filter(jugador => jugador.documento === documento)

  if (jugador.length !== 0) {
    res = { ok: true, message: "", jugador }
  }

  return Response.json(res)
}