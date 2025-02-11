export default async function Page({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const slug = (await params).code;
  return <div>My Post: {slug}</div>;
}
