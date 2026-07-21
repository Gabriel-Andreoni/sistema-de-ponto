import { ClockIn } from "./components/ClockIn";
import { ClockInButton } from "./components/ClockInButton";
import { TimeLogs } from "./components/TimeLogs";
import { UserInfo } from "./components/UserInfo";

export default function Home() {
  return (
    <main className="w-full h-screen p-8 grid grid-cols-4 grid-rows-3 gap-8">
      <div className="col-span-1 row-span-3 flex flex-col gap-8">
        <UserInfo />
        <ClockIn />
      </div>
      <TimeLogs />
      <ClockInButton />
    </main>
  );
}