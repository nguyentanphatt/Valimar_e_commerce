import { auth } from "@/lib/auth";

export default async function UserInfo() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <h1>Test</h1>
      <p>Username {session?.user?.name}</p>
      <p>email {session?.user?.email}</p>
    </div>
  );
}
