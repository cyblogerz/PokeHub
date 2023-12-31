import Logo from "../../assets/Icons/Logo";



export default function Loading(props) {
  return (
    <main className="w-full h-full grow flex pt-14 justify-center items-center">
      <div className="animate-bounce flex flex-row gap-2">
        <Logo/>
        <h1>Loading...</h1>
      </div>
    </main>
  );
}