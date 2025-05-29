"use server";

import { cookies } from "next/headers";

export async function setCookies(name: string, value: string) {
  const cookie = await cookies();
  const now = new Date();
  console.log(now);
  let time = now.getTime();
  console.log(time);
  time += 60 * 60 * 1000;
  now.setTime(time);
  console.log(now);
  cookie.set(name, value, { httpOnly: true, expires: now });
}

export async function getCookies(name: string) {
  const cookie = await cookies();
  return cookie.get(name)?.value;
}

export async function removeCookies(name: string) {
  const cookie = await cookies();
  cookie.delete(name);
  return true;
}