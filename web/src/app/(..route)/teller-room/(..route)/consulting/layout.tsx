import TabMenu from "@/app/ui/consulting-room/tab-menu";
import TellerConsultingChatting from "@/app/ui/consulting-room/teller/teller-consulting-chatting";

export default function Layout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="flex h-screen flex-row overflow-hidden">
      <div className="w-[70%] overflow-y-auto">{children}</div>
      <div className="w-[30%] overflow-x-auto bg-hwachang-darkgreen">
        <div className="grid grid-cols-1 gap-10 p-6">
          <TabMenu type={"PERSONAL"} />
          <TellerConsultingChatting />
        </div>
      </div>
    </div>
  );
}