"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const useUser = () => {
    // Simulating a user hook, replace with actual user fetching logic
    return {
      isLoaded: true,
      isSignedIn: true,
      user: {
        publicMetadata: {
          role: 'admin', // Simulate no role
        },
      },
    };
  }
  const { isLoaded, isSignedIn, user } = useUser();

  const router = useRouter();

  useEffect(() => {
    const role = user?.publicMetadata.role;

    if (role) {
      router.push(`/${role}`);
    }
  }, [user, router]);

  return (
    <div className="h-screen flex items-center justify-center bg-lamaSkyLight">
      <div className="flex flex-col items-center gap-4">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
        <h1 className="text-2xl font-bold text-lamaPurple">Welcome to Lama Dev</h1>
        <p className="text-gray-600">Please sign in to continue</p>
        {isLoaded && !isSignedIn && (
          <button
            onClick={() => router.push("/sign-in")}
            className="px-6 py-2 bg-lamaPurple text-white rounded-full hover:bg-lamaPurpleDark transition"
          >
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
