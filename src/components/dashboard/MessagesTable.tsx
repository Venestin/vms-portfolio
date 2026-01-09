type Message = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
};

type Props = {
  messages: Message[];
};

export function MessagesTable({ messages }: Props) {
  return (
    <div className="bg-[#0f172a] border border-white/10 rounded-xl p-6 lg:col-span-2">
      <h3 className="text-lg font-semibold mb-4">Project Requests</h3>

      <table className="w-full text-sm text-left">
        <thead className="text-gray-400 border-b border-white/10">
          <tr>
            <th className="py-2">Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {messages.length === 0 && (
            <tr>
              <td colSpan={4} className="py-6 text-center text-gray-400">
                No messages yet
              </td>
            </tr>
          )}

          {messages.map((msg) => (
            <tr key={msg.id} className="border-b border-white/5">
              <td className="py-2">{msg.name}</td>
              <td>{msg.email}</td>
              <td>{msg.subject}</td>
              <td className="text-xs text-gray-400">{msg.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
