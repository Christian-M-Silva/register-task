import { Redirect } from "@/components/ui/atoms/redirectComponent/Redirect";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tarefas - Home',
  description: 'Boas vindas!!!',
}

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <h1 className="text-6xl" data-cy="input-email">Seja bem vindo</h1>
      <Redirect hrf="tasks" label="Visualizar tarefas" />
    </div>
  );
}
