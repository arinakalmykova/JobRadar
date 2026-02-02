import { LoginForm } from "@/widgets/";

export default function LoginPage() {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Вход</h1>
      <LoginForm />
    </div>
  );
}
