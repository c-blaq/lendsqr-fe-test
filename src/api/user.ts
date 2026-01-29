import type { UserT } from "@/types/user";

// const USERS_CACHE_KEY = "users_cache";

export async function getAllUsers(): Promise<UserT[]> {
  //   const cached = localStorage.getItem(USERS_CACHE_KEY);
  //   if (cached) {
  //     return JSON.parse(cached) as UserT[];
  //   }

  const res = await fetch("/mock/users.json");
  const data: UserT[] = await res.json();

  //   localStorage.setItem(USERS_CACHE_KEY, JSON.stringify(data));
  return data;
}
