import Link from "next/link";
const Home = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center min-h-screen ">
      <h3 className="text-2xl"> Tes Junior Progammer</h3>
      <Link className="hover:underline" href="/products">
        Klik disini
      </Link>
    </div>
  );
};

export default Home;
