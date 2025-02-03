import { signInAction } from "@/app/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;
  return (
    <div>
      <div className="flex items-end justify-end py-6">
        <img src="/homi_logo.png" alt="Homi Logo" className="w-32" />
      </div>
      <div className="flex w-full flex-1 items-center justify-center p-6">
        <form className="w-full max-w-md rounded-lg bg-white p-6">
          <h3 className="mb-2 text-center text-2xl font-bold">
            Sign in
            <span className="text-red-500">.</span>
          </h3>

          {/* Email Input */}
          <Label htmlFor="email" className="mb-1 block font-medium">
            Email Address
          </Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="mb-4 w-full rounded-full border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-red-300"
          />

          {/* Password Input */}
          <Label htmlFor="password" className="mb-1 block font-medium">
            Password
          </Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            required
            className="mb-2 w-full rounded-full border border-gray-300 p-2 focus:outline-none focus:ring focus:ring-red-300"
          />
          <Link
            className="text-xs text-foreground underline"
            href="/forgot-password"
          >
            Forgot Password?
          </Link>

          {/* Submit Button */}
          <SubmitButton pendingText="Signing In..." formAction={signInAction}>
            Sign In
          </SubmitButton>
          <FormMessage message={searchParams} />

          {/* Or sign in/up with */}
          <div className="my-6 flex items-center justify-center">
            <hr className="w-[20%] border-gray-300" />
            <div className="px-4 text-sm text-gray-400">Or sign in with</div>
            <hr className="w-[20%] border-gray-300" />
          </div>

          <div className="flex justify-center gap-4">
            <button type="button">
              <img
                src="/facebook_logo.png"
                alt="Facebook"
                className="h-8 w-8"
              />
            </button>
            <button type="button">
              <img src="/google_logo.png" alt="Google" className="h-8 w-8" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
// export default async function Login(props: { searchParams: Promise<Message> }) {
//   const searchParams = await props.searchParams;
//   return (
//     <form className="flex-1 flex flex-col min-w-64">
//       <h1 className="text-2xl font-medium">Sign in</h1>
//       <p className="text-sm text-foreground">
//         Don't have an account?{" "}
//         <Link className="text-foreground font-medium underline" href="/sign-up">
//           Sign up
//         </Link>
//       </p>
//       <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
//         <Label htmlFor="email">Email</Label>
//         <Input name="email" placeholder="you@example.com" required />
//         <div className="flex justify-between items-center">
//           <Label htmlFor="password">Password</Label>
// <Link
//   className="text-xs text-foreground underline"
//   href="/forgot-password"
// >
//   Forgot Password?
// </Link>
//         </div>
//         <Input
//           type="password"
//           name="password"
//           placeholder="Your password"
//           required
//         />
//         <SubmitButton pendingText="Signing In..." formAction={signInAction}>
//           Sign in
//         </SubmitButton>
//         <FormMessage message={searchParams} />
//       </div>
//     </form>
//   );
// }
