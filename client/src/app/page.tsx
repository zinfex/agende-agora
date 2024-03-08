import Agend from './agend'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Painel de agendamentos

      <Agend />
    </main>
  );
}
