export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <h1>Page content</h1>
      <p>Loading is complete!</p>
    </div>
  );
}
