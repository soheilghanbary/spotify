import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export async function getUserSession() {
  const { getUser } = getKindeServerSession()
  const user = getUser()
  return user
}

export async function getId() {
  const { getUser } = getKindeServerSession()
  const id = getUser()
  return id ? getUser().id! : ""
}
