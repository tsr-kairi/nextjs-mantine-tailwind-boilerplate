import { Button, Group } from '@mantine/core';

export default function Home() {
  return (
    <main className="fixed inset-0 grid place-content-center">
      <div className="text-center flex flex-col items-center gap-8">
        <h1 className="text-8xl font-bold">Boilerplate</h1>
        <h1 className="text-5xl font-bold">
          Mantine With Next JS <span className="text-red-500">&hearts;</span> and Tailwind CSS
        </h1>
        <Group>
          <Button>Agree</Button>
          <Button variant="light">Disagree</Button>
        </Group>
      </div>
    </main>
  );
}
