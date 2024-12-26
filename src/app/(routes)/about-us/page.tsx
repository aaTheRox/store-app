"use client";
import Container from "@/app/components/Container";
import { useRouter } from "next/navigation";
import useGetPage from "../../../../api/useGetPage";

export default function Page() {
  const router = useRouter();

  const { result, loading, error } = useGetPage("about-us");

  console.log(error);

  return (
    <Container>
      <div className="text-center h-screen items-center justify-center flex flex-col space-y-5 ">
        <p className="text-2xl">About us</p>
      </div>
    </Container>
  );
}
